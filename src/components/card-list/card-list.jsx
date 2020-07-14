import React from "react";
import Card from "../card/card";

import "./card-list.css";
const CardList = props => {
  console.log(props);

  return (
    <div className="card-list">
      {props.monsters.map((item, index) => (
        <Card key={index} id={index} monster={item} />
      ))}
    </div>
  );
};

export default CardList;
