import React from "react";
import "./styles/main.css";

function Calendar(props) {
  return (
    <main className="calendar">
      <p className="calendar__description">Happening This Week</p>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">MON</p>
          <p className="calendar__date--day">22</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.monday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">TUE</p>
          <p className="calendar__date--day">23</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.tuesday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">WED</p>
          <p className="calendar__date--day">24</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.wednesday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">THU</p>
          <p className="calendar__date--day">25</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.thursday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">FRI</p>
          <p className="calendar__date--day">26</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.friday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">SAT</p>
          <p className="calendar__date--day">27</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.saturday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">SUN</p>
          <p className="calendar__date--day">28</p>
        </div>
        <div className="calendar__doing">
          {props.toDos.sunday.map((activity) => (
            <p
              className="calendar__doing--description"
              style={{ backgroundColor: activity.userColor }}
            >
              {activity.user}: {activity.name}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Calendar;
