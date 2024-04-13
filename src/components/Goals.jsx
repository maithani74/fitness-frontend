import React from "react";
import '../styles/goals.css'
import { Link } from "react-router-dom";
const Goals = () => {
  return (
    <div className="goals">
      <h1>What are your Goals?</h1>
      <div className="boxes">
        <div className="box">
          <label>Weight Loss</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="box">
          <label>Muscle Gain</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="box">
          <label>Flexibility and Mobility</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="box">
          <label>General Fitness</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="box">
          <label>Event - specific training</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="box">
          <label>Mindfulness and Mental Health</label>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <Link to="/workout"  style={{textDecoration:"none"}}>
      <div className="confirm">
        <button type="submit">Confirm</button>
      </div>
      </Link>
    </div>
  );
};

export default Goals;
