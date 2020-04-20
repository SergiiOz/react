import React from "react";
// import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  function addNewPost() {
    //function from redux/state.js
    // props.addPost();
    //let action = {type: 'ADD-POST}
    props.store.dispatch(addPostActionCreator());

    //after get value we clear textarea in redux/state.js
  }

  let postChange = (text) => {
    //get value from the element textarea DOM
    // let text = newPostElement.current.value;
    // console.log(text);
    // let action = {
    //   type: "UPDATE-NEW-POST-TEXT",
    //   newText: text,
    // };
    // props.updateNewPostText(text);
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <MyPosts
      updateNewPostText={postChange}
      addPost={addNewPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
