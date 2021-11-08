import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <div id="login">
      <div class="card">
        <form>
          <h2 class="title"> Log in</h2>
          <div class="email-login">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="uname"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button class="cta-btn">Log In</button>
          <a class="forget-pass" href="#">
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
