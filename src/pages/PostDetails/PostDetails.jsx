import React from "react";
import "./postDetails.css";
import Post1 from "../../assets/img/post-1.jpg";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "@boxicons/react";

import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  // const post = posts.find((item) => item.id === Number(id));
  return (
    <main>
      {/* Post Header */}
      <section className="post-header">
        <div className="header-content post-container">
          <Link to="/" className="back-home">
            Back To Home
          </Link>

          <h1 className="header-title">Lorem ipsum dolor sit amet.</h1>

          <img src={Post1} alt="Post" className="header-img" />
        </div>
      </section>

      {/* Post Content */}
      <section className="post-content post-container">
        <h2 className="sub-heading">Create Best UX Design</h2>

        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          reprehenderit soluta qui veniam amet explicabo.
        </p>

        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          reprehenderit soluta qui veniam amet explicabo.
        </p>

        <h2 className="sub-heading">Create Best UX Design</h2>

        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          reprehenderit soluta qui veniam amet explicabo.
        </p>
      </section>

      {/* Comments */}
      <section className="comment-section post-container">
        <h3>
          <span style={{ marginRight: "8px" }}>💬</span>
          <button id="commentBtn" className="comment-btn">
            Comments (<span id="commentCount">2</span>)
          </button>
        </h3>

        <div className="comment">
          <strong>Alice:</strong> Great post! Learned a lot 👏
        </div>

        <hr />

        <div className="comment">
          <strong>John:</strong> Thanks for sharing this information.
        </div>

        <hr />

        <br />

        <form className="comment-form">
          <h2 className="sub-heading">Leave a Comment</h2>

          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <textarea rows="5" placeholder="Write your comment..." required />
          </div>

          <button type="submit" className="submit-btn">
            Post Comment
          </button>
        </form>
      </section>

      {/* Share */}
      <div className="share post-container">
        <div className="share-title">Share this article</div>

        <div className="social">
          <Facebook size="bxl" className="bx" />
          <Instagram size="bxl" className="bx" />
          <Twitter size="bxl" className="bx" />
          <Linkedin size="bxl" className="bx" />
          <Github size="bxl" className="bx" />
        </div>
      </div>
    </main>
  );
};

export default PostDetails;
