import React from "react";
import "./styles/main.css";

function House(props) {
  return (
    <div>
      <h1>My Happy House</h1>
      <div>
        <h2>To Do</h2>
        <ul>
          <li>Vacuum</li>
          <li>Laundry</li>
          <li>Take Trash Out</li>
          <li>Meal Prep</li>
          <li>Add New</li>
        </ul>
      </div>
    </div>
  );
}

export default House;
