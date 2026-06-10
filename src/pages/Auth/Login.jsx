import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <section className="auth-section">
        <div className="auth-container">
          <h2>Login</h2>

          <form>
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <p className="auth-link">
              Don't have an account?
              <Link to={"/signup"}> Signup</Link>
            </p>
          </form>

          <div className="social-login">
            <p>Or login with</p>

            <button className="social-btn google">
              <i className="bx bxl-google"></i>
              Sign In With Google
            </button>

            <button className="social-btn facebook">
              <i className="bx bxl-facebook"></i>
              Sign In With Facebook
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
