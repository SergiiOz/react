// import React from "react";
// import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   function addNewPost() {
//     //function from redux/state.js
//     // props.addPost();
//     //let action = {type: 'ADD-POST}
//     props.store.dispatch(addPostActionCreator());

//     //after get value we clear textarea in redux/state.js
//   }

//   let postChange = (text) => {
//     // get value from the element textarea DOM
//     // let text = newPostElement.current.value;
//     // console.log(text);
//     // let action = {
//     //   type: "UPDATE-NEW-POST-TEXT",
//     //   newText: text,
//     // };
//     // props.updateNewPostText(text);
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   };
//   return (
//     <MyPosts
//       updateNewPostText={postChange}
//       addPost={addNewPost}
//       postsData={state.profilePage.postsData}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

// export default MyPostsContainer;

let mapStateToProps = (state) => {
  return {
    //this data pass to 'MyPosts' in props
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    //function pass in 'MyPosts' in props
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
