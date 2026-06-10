import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import "./allPost.css";

function AllPosts() {
  const [posts] = useState([
    {
      id: 1,
      title: "How to Learn Spring Boot",
      category: "Programming",
      authorName: "Romee",
      createdAt: "09 Sep 2025",
      status: "APPROVED",
    },
    {
      id: 2,
      title: "Understanding Microservices",
      category: "Technology",
      authorName: "Admin",
      createdAt: "07 Sep 2025",
      status: "PENDING",
    },
    {
      id: 3,
      title: "Best Practices in Java",
      category: "Java",
      authorName: "Romee",
      createdAt: "05 Sep 2025",
      status: "REJECTED",
    },
    {
      id: 4,
      title: "React Hooks Complete Guide",
      category: "React",
      authorName: "John",
      createdAt: "01 Sep 2025",
      status: "APPROVED",
    },
    {
      id: 5,
      title: "Spring Security with JWT",
      category: "Security",
      authorName: "Admin",
      createdAt: "30 Aug 2025",
      status: "PENDING",
    },
  ]);

  return (
    <div className="table-container">
      <h2>All Posts</h2>

      <table id="postsTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td data-label="#">{index + 1}</td>

              <td data-label="Post Title">{post.title}</td>

              <td data-label="Category">
                <span className="badge bg-primary">{post.category}</span>
              </td>

              <td data-label="Author">{post.authorName}</td>

              <td data-label="Date">{post.createdAt}</td>

              <td data-label="Status">
                <span
                  className={`badge ${
                    post.status === "APPROVED"
                      ? "bg-success"
                      : post.status === "PENDING"
                        ? "bg-warning"
                        : "bg-danger"
                  }`}>
                  {post.status}
                </span>
              </td>

              <td data-label="Actions">
                <Link to={`/edit-post/${post.id}`} className="comment-btn">
                  Edit
                </Link>

                <button className="comment-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination container">
        <Pagination />
      </div>
    </div>
  );
}

export default AllPosts;
