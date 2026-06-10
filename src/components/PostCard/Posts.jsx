import React from "react";
import Card from "../PostCard/Card";

const Posts = ({ posts }) => {
  return (
    <section className="post container">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
