import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.postsData.map((post) => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    );
  });
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
        {/* <Post message="Are you here first time?" likesCount="24" />
        <Post message="It's my first post." likesCount="15" /> */}
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
