import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        onClick={() => props.handleClickChange(props.id)}
        id={props.id}
        lt={props.name}
        src={props.image} />
    </div>
  </div>
);

export default FriendCard;
