import React from "react";
import "./styles/main.css";
import usericon from "../assets/icons/user3.svg";

function Wall(props) {
  return (
    <div className="wall">
      {props.house.comments.map((comment) => (
        <div className="wall__comment">
          <p className="wall__content">{comment.comment}</p>
          <div className="wall__wrapper">
            <img src={usericon} alt="user-icon" className="wall__user-icon" />
            <p className="wall__user-name" style={{ color: comment.userColor }}>
              {comment.userName}
            </p>
          </div>
        </div>
      ))}
      <form action="" className="wall__form">
        <textarea
          placeholder="Write something..."
          className="wall__input"
        ></textarea>
        <button className="wall__btn">Send</button>
      </form>
    </div>
  );
}

export default Wall;
