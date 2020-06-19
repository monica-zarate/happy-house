import React from "react";
import "./styles/main.css";
import Header from "./Header";

function Wall(props) {
  return (
    <div className="wall">
      <Header />
      <div className="wall__container">Wall</div>
    </div>
  );
}

export default Wall;
