import React from "react";
import Card from "./Card";

const CardList = ({ robot }) => {
  return (
    <div>
      {robot.map((user, i) => {
        return (
          <Card
            id={robot[i].id}
            name={robot[i].name}
            email={robot[i].email}
            phone={robot[i].phone}
          />
        );
      })}
    </div>
  );
};

export default CardList;
