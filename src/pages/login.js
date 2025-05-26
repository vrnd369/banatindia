import React from "react";
import "./login.css";
import googleLogo from "../assets/googlelogo.png"; // use a colored Google icon image
import loginImage from "../assets/banat1.png";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Banat Banner" />
      </div>
      <div className="login-right">
        <h2 className="login-title">
          Log in to <span className="brand-text">Banat</span>
        </h2>
        <p className="login-subtitle">
          Welcome back! Login with your credentials.
        </p>

        <div className="social-buttons">
          <button className="login-social google">
            <img src={googleLogo} alt="Google" className="icon-img" />
            Login with Google
          </button>
          <button className="login-social facebook">
            <FaFacebookF className="icon" />
            Login with Facebook
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="link-button">
              Forgot your password?
            </button>
          </div>
          <button type="submit" className="login-submit">
            LOGIN
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <button type="button" className="link-button">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
