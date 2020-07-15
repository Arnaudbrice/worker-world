import React from "react";
import "./card.css";
import "./hover-min.css";

const Card = props => {
  return (
    <div className="card-container  hvr-grow-shadow hvr-rectangle-out  hvr-hollow">
      <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} alt="robot"/>
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;