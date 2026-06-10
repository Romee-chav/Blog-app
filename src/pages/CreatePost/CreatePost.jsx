import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CreatePost() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    content: "",
  });

  useEffect(() => {
    if (id) {
      // Dummy Data for Edit Mode
      const post = {
        id: 1,
        title: "How to Learn Spring Boot",
        category: "Programming",
        shortDescription:
          "Complete guide to learn Spring Boot from beginner to advanced level.",
        content:
          "Spring Boot is one of the most popular Java frameworks for building enterprise applications.",
      };

      setFormData(post);

      // Later replace with API call
      // axios.get(`/api/posts/${id}`)
      // .then((res) => setFormData(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      console.log("Update Post", formData);

      // axios.put(`/api/posts/${id}`, formData);
    } else {
      console.log("Create Post", formData);

      // axios.post("/api/posts", formData);
    }
  };

  return (
    <main>
      <section className="auth-section">
        <div className="post-container">
          <h2>{id ? "Edit Post" : "Create New Post"}</h2>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group">
              <label>Post Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter post title"
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Add Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required>
                <option value="">-- Select Category --</option>
                <option value="Programming">Programming</option>
                <option value="Technology">Technology</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Spring Boot">Spring Boot</option>
              </select>
            </div>

            {/* Image */}
            <div className="form-group">
              <label>Upload Image</label>
              <input type="file" accept="image/*" />
            </div>

            {/* Short Description */}
            <div className="form-group">
              <label>Short Description</label>

              <textarea
                name="shortDescription"
                rows="3"
                value={formData.shortDescription}
                onChange={handleChange}
                placeholder="Enter a short description..."
                required
              />
            </div>

            {/* Content */}
            <div className="form-group">
              <label>Content</label>

              <textarea
                name="content"
                rows="6"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your full post content here..."
                required
              />
            </div>

            <button type="submit" className="btn">
              {id ? "Update Post" : "Publish Post"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CreatePost;
