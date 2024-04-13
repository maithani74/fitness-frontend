import React from "react";
import "../styles/workout.css";
import danger from "../assests/danger.png";
import fullBody from "../assests/full-body.png";
import upperBody from "../assests/upperBody.png";
import { Link } from "react-router-dom";
const WorkoutTracker = () => {
  return (
    <>
      <div className="workoutTracker">
        <div className="h1">
          <Link to="/goals" style={{ textDecoration: "none" }}>
            <div class="left-arrow-button">
              <div class="arrow"></div>
            </div>
          </Link>
          <h1>Workout Tracker</h1>
        </div>
        <p style={{ marginLeft: "120px" }}>Good job </p>
        <p style={{ marginLeft: "60px" }}>less than 320 cals</p>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <div className="chart">
            <div className="cals" style={{ color:"black" }}>900CALS</div>
            <div className="value">
              <div className="cal">
                <div className="dotted1"></div>
                <div className="dotted2"></div>
                <div className="dotted3"></div>
                <div className="dotted4"></div>
              </div>
              <div className="bars">
                <div className="one">
                  <div className="ones"></div>
                </div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
                <div className="seven"></div>
                <div className="eight"></div>
                <div className="nine"></div>
                <div className="ten"></div>
                <div className="eleven"></div>
                <div className="twelve">
                  <div className="twelves"></div>
                </div>
                <div className="thirteen">
                  <div className="thirteens"></div>
                </div>
                <div className="fourteen">
                  <div className="fourteens"></div>
                </div>
                <div className="fifteen">
                  <div className="fifteens"></div>
                </div>
              </div>
            </div>
            <div className="time">
              <h2 style={{ color:"black" }}>12:00</h2>
              <h2 style={{ color:"black" }}>6:00</h2>
              <h2 style={{ color:"black" }}>12:00</h2>
              <h2 style={{ color:"black" }}>6:00</h2>
            </div>
          </div>
        </Link>
        <div className="warning">
          <img src={danger} alt="danger" />
          <h5>
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </h5>
        </div>
        <h3 style={{ marginLeft: "20px" }}>Upcoming Workout </h3>
        <div className="workoutBox">
          <div className="fullBody">
            <img src={fullBody} alt="" srcset="" />
            <div className="box">
              <p className="label">Full Body Workout</p>
              <p>Today 3pm</p>
            </div>
            <div className="button">
              <label class="toggle">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div className="upperBody">
            <img src={upperBody} alt="" srcset="" />
            <div className="box">
              <p className="label">Upper Body Workout</p>
              <p>4 Feb, 3:30 pm</p>
            </div>
            <div className="button">
              <label class="toggle">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkoutTracker;
