import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.checkAlreadyClicked(props)} >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
