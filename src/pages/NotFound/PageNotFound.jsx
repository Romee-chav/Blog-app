import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="error-page">
      <div className="container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to={"/"} className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
