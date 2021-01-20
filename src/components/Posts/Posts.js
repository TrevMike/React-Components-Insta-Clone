import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  // console.log(likePost);

  return (
    <div className="posts-container-wrapper">
      {posts.map((item, id) => {
        return <Post key={id} post={item} likePost={likePost} />;
      })}
      {/* <Post /> */}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
