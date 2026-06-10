import React, { useState } from "react";
import "./home.css";
import Filter from "../../components/Filter/Filter";
import SearchBox from "../../components/SearchBox/SearchBox";
import Post from "../../components/PostCard/Posts";
import Pagination from "../../components/Pagination/Pagination";

import img1 from "../../assets/img/post-1.jpg";
import profile1 from "../../assets/img/profile-1.jpg";

const Home = () => {
  const posts = [
    {
      id: 1,
      category: "Technology",
      title: "Learn React From Beginner To Advanced",
      date: "08 Jun 2026",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: img1,
      author: "Romee Chavhan",
      profile: profile1,
    },
    {
      id: 2,
      category: "Education",
      title: "Spring Boot Complete Guide",
      date: "09 Jun 2026",
      description: "Learn Spring Boot with practical examples.",
      image: img1,
      author: "Romee Chavhan",
      profile: profile1,
    },
    {
      id: 3,
      category: "Travel",
      title: "Top 10 Places To Visit",
      date: "10 Jun 2026",
      description: "Explore the best travel destinations.",
      image: img1,
      author: "Romee Chavhan",
      profile: profile1,
    },
    {
      id: 4,
      category: "Travel",
      title: "Top 10 Places To Visit",
      date: "10 Jun 2026",
      description: "Explore the best travel destinations.",
      image: img1,
      author: "Romee Chavhan",
      profile: profile1,
    },
    {
      id: 5,
      category: "Travel",
      title: "Top 10 Places To Visit",
      date: "10 Jun 2026",
      description: "Explore the best travel destinations.",
      image: img1,
      author: "Romee Chavhan",
      profile: profile1,
    },
  ];
  const [selected, setSelected] = useState("All");
  return (
    <>
      <section className="home">
        <div className="home-text container">
          <h2 className="home-title">Mind Scribe</h2>
          <span className="home-subtitle">Your source of great content</span>
        </div>
      </section>
      <Filter selected={selected} setSelected={setSelected} />
      <SearchBox />
      <Post posts={posts} />
      <Pagination />
    </>
  );
};

export default Home;
