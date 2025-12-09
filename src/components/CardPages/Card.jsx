import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div>
        <div className="card-background">
      <div className="cards-wrapper d-flex justify-content-spacebetween">
      <div className="card card-details">
        <span className="emoji">😇</span>
        <h1 className="main-title">64</h1>
        <p className="title">design tips</p>
        </div>
      
     
      <div className="card card-details">
        <span className="emoji heart">❤️</span>
        <span className="big-emoji ">🤩</span>
        <div className="title">daily practice</div>
        <div className="sub-title">Day 1</div>
        <button className="button">Start Practice</button>
      </div>
    </div>
   </div>
    </div>
  );
};

export default Card;
