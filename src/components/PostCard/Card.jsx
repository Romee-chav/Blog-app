import React from "react";
import "./card.css";

import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="post-box">
      <img src={post.image} alt={post.title} className="post-img" />

      <h2 className="category">{post.category}</h2>

      <h5 className="post-title">{post.title}</h5>

      <span className="post-date">{post.date}</span>

      <p className="post-description">{post.description}</p>

      <Link to={`/post/${post.id}`} state={{ post }} className="read-more">
        Read More
      </Link>

      <div className="profile">
        <img src={post.profile} alt={post.author} className="profile-img" />
        <span className="profile-name">{post.author}</span>
      </div>
    </div>
  );
};

export default Card;
