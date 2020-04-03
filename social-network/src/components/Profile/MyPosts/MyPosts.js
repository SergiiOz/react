import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = porps => {
  return (
    <div>
      <div className={styles.text}>
        <h3>My posts:</h3>
        <textarea></textarea>
        <br />
        <button>Add post</button>
      </div>

      {/* posts */}
      <div>
        <Post message="How are you?" likesCount="24" />
        <Post message="It's my first post." likesCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
