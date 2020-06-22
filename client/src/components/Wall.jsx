import React from "react";
import "./styles/main.css";
import Header from "./Header";

function Wall(props) {
  return (
    <>
      <Header house={props.house} user={props.user} />
      <div className="wall">
        <div className="wall__container">Wall Component</div>
      </div>
    </>
  );
}

export default Wall;
