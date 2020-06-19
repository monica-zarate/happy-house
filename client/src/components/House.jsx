import React from "react";
import "./styles/main.css";
import Header from "./Header";
import todo from "../assets/icons/hh-icon.svg";

function House(props) {
  return (
    <>
      <Header />
      <div className="house">
        <h1 className="house__title">My Happy House</h1>
        <div className="house__container">
          <h2 className="house__house-name">To Do</h2>
          <img className="house__icon" src={todo} alt="" />
          <ul className="house__list">
            <li className="house__activity">
              {" "}
              <button>Vacuum</button>{" "}
            </li>
            <li className="house__activity">
              {" "}
              <button> Laundry</button>
            </li>
            <li className="house__activity">
              {" "}
              <button> Take Trash Out</button>
            </li>
            <li className="house__activity">
              {" "}
              <button>Meal Prep</button>
            </li>
            <li className="house__activity">
              <button>Add New </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default House;
