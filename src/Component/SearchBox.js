import React from "react";

const SearchBox = ({ searchfield, searchRobots }) => {
  return (
    <div className="search_Div">
      <div>
        <h1 className="robo">Robofriends</h1>
      </div>
      <div className="input_Div">
        <input
          type="text"
          className="input"
          placeholder="Search"
          onChange={searchRobots}
        />
      </div>
    </div>
  );
};

export default SearchBox;
