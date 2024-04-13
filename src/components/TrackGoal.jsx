import React from "react";
import img1 from "../assests/trackGoal.png";
import "../styles/trackGoal.css";
import { Link } from "react-router-dom";
const TrackGoal = () => {
  return (
    <div className="trackGoal">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <p className="skip">skip</p>
      </Link>
      <div className="img">
        <img src={img1} alt="trackGoal" srcset="" />
      </div>
      <h1>Track Your Goal</h1>
      <p style={{ borderBottom: "0px" }}>
        Don't worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals.
      </p>
      <div className="main">
        <Link to="/getburn">
          <div class="loading-container">
            <div class="circle">
              <i class="arrow">→</i>
            </div>
            <div class="loader"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrackGoal;
