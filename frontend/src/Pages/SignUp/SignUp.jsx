import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import logo from "../../assets/images.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post(
        "http://localhost:3000/api/Member/createMember",
        {
          email: email,
          fullName: fullName,
          userName: userName,
          password: password,
        }
      );
      console.log(response.data); // Handle the response (e.g., redirect or show a message)
      dispatch(response.data.user); // Dispatch the user data to the Redux store
      navigate("/Home"); // Redirect to the home page after successful sign up
    } catch (error) {
      console.error(error.message); // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo} alt="App Logo" />
        <button className="signup-with-facebook">Sign up with Facebook</button>
        <div className="or-divider">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="terms">
          By signing up, you agree to our <a href="#">Terms</a>,{" "}
          <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
        </p>
      </div>
      <div className="login-box">
        <p>
          Have an account? <a href="/">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
