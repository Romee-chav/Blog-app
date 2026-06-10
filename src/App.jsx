import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AppLayout from "../src/layouts/AppLayout";
import AuthLayout from "../src/layouts/AuthLayout";
import PostDetails from "./pages/PostDetails/PostDetails";
import {} from "react";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import PageNotFound from "./pages/NotFound/PageNotFound";
import CreatePost from "./pages/CreatePost/CreatePost";
import AllPosts from "./pages/AllPost/AllPosts";
import EditPost from "./pages/EditPost/EditPost";

function App() {
  return (
    <>
      <Routes>
        {/* Pages with Header & Footer */}
        <Route element={<AppLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-post/:id" element={<CreatePost />} />
          <Route path="/all-post" element={<AllPosts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
