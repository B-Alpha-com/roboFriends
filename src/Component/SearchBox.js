import React from "react";
// import './index.css';

const SearchBox = ({ searchfield, searchRobots }) => {
  return (
    <div className="search_Div">
      <nav>
        <ul className="search_ul">
          <li>
            <h1 className="robo">Robofriends</h1>
          </li>
          <li>
            <input
              className="robots"
              type="text"
              placeholder="Search"
              onChange={searchRobots}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SearchBox;
