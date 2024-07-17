import React from "react";
import "./CSS/LoginSignup.css";
export default function LoginSingUp() {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login</span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
