import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <section className="auth-section">
        <div className="auth-container">
          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <button type="submit" className="btn">
              Signup
            </button>
            <p className="auth-link">
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
