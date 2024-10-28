import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./Login.css";
import logo from "../../assets/images.png"; // Correct path to the logo image
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate()
  console.log(email, password);
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const req = await axios.post("http://localhost:3000/api/Member/login", {
        email: email,
        password: password,
      });
      console.log(req.data); // Handle the response

      // Redirect to the home page after successful login
      navigate("/home")

    } catch (error) {
      console.error(error.message); // Handle the error
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="App Logo" />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        <div className="or-divider">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <button className="login-with-facebook">Log in with Facebook</button>
        <a href="/forgot-password" className="forgot-password">
          Forgot password?
        </a>
      </div>
      <div className="sign-up-box">
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
