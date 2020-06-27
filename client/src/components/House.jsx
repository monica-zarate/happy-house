import React from "react";
import "./styles/main.css";
import Axios from "axios";
import todo from "../assets/icons/hh-icon.svg";

function House(props) {
  // Display Schedule Activity Pop-up on Click event
  let openPopUp = (event) => {
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

  // Close pop-up onClick event for Cancel button
  let closePopUp = (event) => {
    event.preventDefault();
    let popUp = document.getElementsByClassName("house__pop-up")[0];
    if (popUp.style.display === "flex") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "flex";
    }
  };

  // Post new activity  per day to API and close pop-up
  let selectActivity = (event) => {
    event.preventDefault();
    console.log(event.target.day.value);
    let selectedDay = event.target.day.value;
    let selectedActivity = document.getElementById("selectedActivity")
      .innerHTML;
    let currentUser = props.user.userName;
    let color = props.user.color;
    let newActivity = {
      day: selectedDay,
      name: selectedActivity,
      user: currentUser,
      userColor: color,
    };
    Axios.post(`/houses/${props.house.houseName}`, newActivity)
      .then((response) => {
        console.log("New activity added");
        props.updateHouseHandler(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    let popUp = document.getElementsByClassName("house__pop-up")[0];
    if (popUp.style.display === "flex") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "flex";
    }
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
              When can you &nbsp;
              <span
                className="house__pop-up--selected-activity"
                id="selectedActivity"
              ></span>
              ?
            </h3>
            <form
              action=""
              onSubmit={selectActivity}
              className="house__pop-up--select"
            >
              <select className="house__pop-up--options" name="day" id="day">
                <option value="0">Select a Day:</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
              <button type="submit" className="house__pop-up--btn">
                Schedule
              </button>
            </form>
            <button className="house__pop-up--cancel" onClick={closePopUp}>
              Cancel
            </button>
          </div>
          <ul className="house__list">
            {props.house.toDos.map((activity) => (
              <li key={activity.id} className="house__activity">
                <button onClick={openPopUp} className="house__activity--btn">
                  {activity.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default House;
