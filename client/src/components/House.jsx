import React from "react";
import "./styles/main.css";
import todo from "../assets/icons/hh-icon.svg";

function House(props) {
  return (
    <>
      <div className="house">
        <h1 className="house__title">{props.house.houseName}</h1>
        <div className="house__container">
          <img className="house__icon" src={todo} alt="" />
          <h2 className="house__todo">To Do This Week</h2>
          <p className="house__description">
            Click on the activity you want to take care of this week
          </p>
          <ul className="house__list">
            <li className="house__activity">
              <button className="house__activity--btn">
                {props.house.toDos[0].name}
              </button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn"> Mopping</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Dusting</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Do the Laundry</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Wash the Dishes</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">
                Take out the Trash{" "}
              </button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Clean Bathroom</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Water Plants</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Grocery Shopping</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Meal Prepping</button>
            </li>
            <li className="house__activity">
              <button className="house__activity--btn">Add New </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default House;
