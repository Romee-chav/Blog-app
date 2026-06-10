import React from "react";
import "./searchBox.css";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
