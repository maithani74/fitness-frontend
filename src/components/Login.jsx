import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(
        "https://fitness-backend-jqvr.onrender.com/api/v1/user/login",
        { email, password }
      );
      if (data?.success) {
        navigate("/goals");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Welcome Back</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="fields">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id=""
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id=""
            placeholder="Password"
          />
        </div>
        <p>Forgot Your Password?</p>

        {/* <Link style={{ textDecoration: "none" }} to="/goals"> */}
          <button type="submit">Sign In</button>
        {/* </Link> */}
      </form>

      <div className="or">
        <input className="line1" type="text" />
        Or
        <input className="line2" type="text" />
      </div>
      <p className="change">
        Don't have an account yet?{" "}
        <Link style={{ textDecoration: "none" }} to="/register">
          <span>Create Account</span>
        </Link>
      </p>
    </>
  );
};

export default Login;
