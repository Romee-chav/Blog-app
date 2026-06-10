import React from "react";
import "./Filter.css";

const Filter = ({ selected, setSelected }) => {
  const categories = [
    "All",
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
  ];
  return (
    <div className="post-filter container">
      {categories.map((cat) => (
        <span
          key={cat}
          className={
            selected === cat ? "filter-item active-filter" : "filter-item"
          }
          onClick={() => setSelected(cat)}>
          {cat}
        </span>
      ))}
    </div>
  );
};

export default Filter;
