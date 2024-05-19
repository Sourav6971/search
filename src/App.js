import React, { useState } from "react";
import "./App.css";
const data = require("./DATA.json");
const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const onSearch = (searchItem) => {
    if (!searchItem) {
      setError("The search bar is empty");
    }
    setValue(searchItem);
  };
  const myStyle = {
    color: "red",
  };

  return (
    <div className="container">
      <div className="searchElement">
        <div className="searchBar">
          <input
            className="inputTag"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="searchButton"
            onClick={() => {
              onSearch(value);
            }}
          >
            Search
          </button>
        </div>
        <p style={myStyle}>{error}</p>
        <div className="dropDown">
          {data
            .filter((index) => {
              const searchItem = value.toLowerCase();
              const fullname = index.fullname.toLowerCase();

              return fullname.startsWith(searchItem);
            })
            .map((index) => {
              return (
                <div
                  className="dropDownRow"
                  onClick={() => onSearch(index.fullname)}
                  key={index.fullname}
                >
                  {index.fullname}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
