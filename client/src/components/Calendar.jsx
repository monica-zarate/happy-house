import React from "react";
import "./styles/main.css";

function Calendar(props) {
  return (
    <main className="calendar">
      <p className="calendar__description">Happening Today</p>

      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">WED</p>
          <p className="calendar__date--day">17</p>
        </div>
        <div className="calendar__doing">
          <p className="calendar__doing--description">Laundry Day</p>
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">THU</p>
          <p className="calendar__date--day">18</p>
        </div>
        <div className="calendar__doing">
          <p className="calendar__doing--description">Vacuuming</p>
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">FRI</p>
          <p className="calendar__date--day">19</p>
        </div>
        <div className="calendar__doing">
          <p className="calendar__doing--description">Meal-prep</p>
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">SAT</p>
          <p className="calendar__date--day">20</p>
        </div>
        <div className="calendar__doing">
          <p className="calendar__doing--description">Grocery Shopping</p>
        </div>
      </div>
      <div className="calendar__activity-wrapper">
        <div className="calendar__date">
          <p className="calendar__date--dotw">SUN</p>
          <p className="calendar__date--day">21</p>
        </div>
        <div className="calendar__doing">
          <p className="calendar__doing--description"></p>
        </div>
      </div>
    </main>
  );
}

export default Calendar;
