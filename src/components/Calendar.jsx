import React, { useState } from "react";
import "../styles/calendar.css";
import user from "../assests/user.png";
import home from "../assests/home.png";
import camera from "../assests/camera.png";
import search from "../assests/search.png";
import exercise from "../assests/exercise.png";
import { useNavigate } from "react-router-dom";
const Calendar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick = async()=>{
    try {
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="calendar">
      <div className="heading">
        <h1>Workout Schedule</h1>
      </div>
      <div className="h5">
        <h5>
          {" "}
          {"<"} Feb 2024 {">"}
        </h5>
      </div>
      <div className="dates">
        <div className="one">
          <label>Sun</label>
          <h2>5</h2>
        </div>
        <div className="mon">
          <label>Mon</label>
          <h2>6</h2>
        </div>
        <div className="one">
          <label>Tue</label>
          <h2>7</h2>
        </div>
        <div className="one">
          <label>Wed</label>
          <h2>8</h2>
        </div>
        <div className="one">
          <label>Thu</label>
          <h2>9</h2>
        </div>
      </div>

      <div className="time">
        <div className="6am">
          <label>06:00AM</label>
          <hr />
        </div>
        <div className="six">
          <div className="inside">
            <label>07:00AM</label>
            <div className="box">Ab Workout, 7:30am</div>
          </div>
          <hr />
        </div>
        <div className="6am">
          <label>08:00AM</label>
          <hr />
        </div>
        <div className="nine">
          <div className="inside">
            <label>09:00AM</label>
            <div className="box box2">Upperbody Workout, 9am</div>
          </div>
          <hr />
        </div>
        <div className="6am">
          <label>10:00AM</label>
          <hr />
        </div>
        <div className="6am">
          <label>11:00AM</label>
          <hr />
        </div>
        <div className="6am">
          <label>12:00PM</label>
          <hr />
        </div>
        <div className="6am">
          <label>01:00PM</label>
          <hr />
        </div>
        <div className="6am">
          <div className="inside">
            <label>02:00PM</label>
            <div className="box box3">Lowerbody Workout, 3pm</div>
          </div>
          <hr />
        </div>
        <div className="6am">
          <label>03:00PM</label>
          <hr />
        </div>
      </div>
      <div className="circle">
        <h3>+</h3>
      </div>
      <footer>
        <div className="images">
          <img src={home} alt="" srcset="" />
          <img src={exercise} alt="" srcset="" />
          <div className="search">
            <img src={search} alt="" srcset="" />
          </div>
          <img src={camera} alt="" srcset="" />
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              open?setOpen(false):(setOpen(true))
            }}
            src={user}
            alt="user"
            srcset=""
          />
        </div>
      </footer>
      {open && (
        <div className="logout">
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
