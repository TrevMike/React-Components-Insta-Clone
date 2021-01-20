import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);

  const likePost = (postId) => {
    setPosts(
      posts.map((item) => {
        return item.id === postId ? { ...item, likes: item.likes + 1 } : item;
      })
    );
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
