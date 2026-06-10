import React from "react";
import "./pagination.css";

const Pagination = () => {
  return (
    <div className="pagination container">
      <button className="page-btn">Prev</button>

      <button className="page-btn active">1</button>

      <button className="page-btn">2</button>

      <button className="page-btn">Next</button>
    </div>
  );
};

export default Pagination;
