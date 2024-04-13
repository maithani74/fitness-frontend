import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const {data} = await axios.post("https://fitness-backend-jqvr.onrender.com/api/v1/user/register",{firstName,lastName,email,password});
      if(data?.success){
        navigate("/goals")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Create an Account</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="fields">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastname"
            placeholder="Last Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="terms">
          <input type="checkbox" name="" id="" />
          <label>
            By proceeding, I agree to all <span> T&C </span>and{" "}
            <span> Privacy Policy </span>
          </label>
        </div>
        {/* <Link style={{ textDecoration: "none" }} to="/goals"> */}
          <div className="submit">
            <button type="submit">
              Sign In
            </button>
          </div>
        {/* </Link> */}
      </form>

      <div className="or">
        <input className="line1" type="text" />
        Or
        <input className="line2" type="text" />
      </div>
      <p className="change">
        Already have an account?
        <Link style={{ textDecoration: "none" }} to="/login">
          <span>Login </span>
        </Link>
      </p>
    </>
  );
};

export default Register;
