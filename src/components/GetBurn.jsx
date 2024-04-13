import React from "react";
import img1 from "../assests/getBurn.png";
import { Link } from "react-router-dom";
const GetBurn = () => {
  return (
    <div className="trackGoal">
      <Link to="/login" style={{textDecoration:"none"}}>
      <p className="skip">skip</p>
      </Link>
      <div className="img">
        <img src={img1} alt="trackGoal" srcset="" />
      </div>
      <h1>Get Burn</h1>
      <p style={{ borderBottom: "0px" }}>
        Let’s keep burning to achieve your goals, it hurts only temporarily, if
        you give up now you will be in pain forever
      </p>
      <Link to="/login">
        <div className="main">
          <div class="loading-container">
            <div class="circle">
              <i class="arrow">→</i>
            </div>
            <div class="loader"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GetBurn;
