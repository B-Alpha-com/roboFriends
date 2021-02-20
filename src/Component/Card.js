import React from "react";

const Cards = (robots) => {
  console.log("robot", robots);
  return (
    <div className="Cards">
      <img alt="Robots" src={`https://robohash.org/${robots.name}?200*200`} />
      <div>
        <h1> {robots.name}</h1>
        <p> {robots.email}</p>
        <p> {robots.phone}</p>
      </div>
    </div>
  );
};

export default Cards;
