import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElement = props.state.postsData.map((post) => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    );
  });

  //create Ref for get access to DOM element
  let newPostElement = React.createRef();

  function addNewPost() {
    //function from redux/state.js
    // props.addPost();
    //let action = {type: 'ADD-POST}
    props.dispatch(addPostActionCreator());

    //after get value we clear textarea in redux/state.js
  }

  let onPostChange = () => {
    //get value from the element textarea DOM
    let text = newPostElement.current.value;
    // console.log(text);
    // let action = {
    //   type: "UPDATE-NEW-POST-TEXT",
    //   newText: text,
    // };
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div>
      <div className={styles.text}>
        <h3>My posts:</h3>
        {/* get value through ref */}
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.state.newPostText}
        ></textarea>
        <br />
        <button onClick={addNewPost}>Add post</button>
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
