import { useState } from "react";
import "./EditPost.css";

function EditPost() {
  const [post, setPost] = useState({
    title: "How to Learn Spring Boot",
    category: "Programming",
    shortDescription:
      "Complete guide to learn Spring Boot from beginner to advanced level.",
    content:
      "Spring Boot is one of the most popular Java frameworks for building enterprise applications...",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Post:", post);

    alert("Post Updated Successfully!");
  };

  return (
    <div className="edit-post-container">
      <div className="edit-post-card">
        <h2>Edit Post</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-group">
            <label>Post Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={post.category}
              onChange={handleChange}
              required>
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="Technology">Technology</option>
              <option value="Java">Java</option>
              <option value="React">React</option>
              <option value="Spring Boot">Spring Boot</option>
            </select>
          </div>

          {/* Image */}
          <div className="form-group">
            <label>Change Image</label>

            <input type="file" accept="image/*" />
          </div>

          {/* Short Description */}
          <div className="form-group">
            <label>Short Description</label>

            <textarea
              name="shortDescription"
              rows="3"
              value={post.shortDescription}
              onChange={handleChange}
              required
            />
          </div>

          {/* Content */}
          <div className="form-group">
            <label>Content</label>

            <textarea
              name="content"
              rows="8"
              value={post.content}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="update-btn">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
