import React from "react";
// import './index.css';

const SearchBox = ({ searchfield, searchRobots }) => {
  return (
    <div className="search_Div">
      <ul className="search_ul">
        <li>
          <h1 className="robo">Robofriends</h1>
        </li>
        <li className="robots">
          <input type="text" placeholder="Search" onChange={searchRobots} />
        </li>
      </ul>
    </div>
  );
};

export default SearchBox;
