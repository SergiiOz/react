import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        <p>My posts:</p>
        <textarea></textarea>
        <br />
        <button>Add post</button>
      </div>

      {/* posts */}
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
