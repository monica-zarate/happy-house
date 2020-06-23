import React from "react";
import "./styles/main.css";
import todo from "../assets/icons/hh-icon.svg";

function House(props) {
  // Display Schedule Activity Pop-up on Click event

  let popUp = (event) => {
    event.preventDefault();
    let popUp = document.getElementsByClassName("house__pop-up")[0];
    if (popUp.style.display === "flex") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "flex";
    }
    document.getElementById("selectedActivity").innerHTML =
      event.target.innerText;
  };

  let selectActivity = (event) => {
    let day = document.getElementsByClassName("house__pop-up--select")[0].value;
    let activity = document.getElementById("selectedActivity").innerHTML;
    props.house.toDosPerDay.tuesday = activity;
  };

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
          <div className="house__pop-up">
            <h3 className="house__pop-up--title">
              When can you
              <span id="selectedActivity"></span>?
            </h3>
            <select className="house__pop-up--select" name="color" id="color">
              <option value="0">Select a Day:</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </select>
            <button className="house__pop-up--btn" onClick={selectActivity}>
              Schedule
            </button>
            <button className="house__pop-up--cancel" onClick={popUp}>
              Cancel
            </button>
          </div>
          <ul className="house__list">
            {props.house.toDos.map((activity) => (
              <li key={activity.id} className="house__activity">
                <button onClick={popUp} className="house__activity--btn">
                  {activity.name}
                </button>
              </li>
            ))}
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
