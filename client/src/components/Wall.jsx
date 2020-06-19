import React from "react";
import "./styles/main.css";
import Header from "./Header";

function Wall(props) {
  return (
    <>
      <Header />
      <div className="wall">
        <div className="wall__container">Wall Component</div>
      </div>
    </>
  );
}

export default Wall;
