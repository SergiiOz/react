export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profilePageReducer = (state, action) => {
  //==========================================
  // change newPostText and addPost
  //==========================================
  //add new message to ProfilePage/postsData

  switch (action.type) {
    //   if (action.type === UPDATE_NEW_POST_TEXT) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      //   break;
      return state;
    //   }

    // action{type: 'ADD-POST'}
    //   if (action.type === ADD_POST) {
    case ADD_POST:
      //create new message
      let newMessage = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      //add new message to array pastsData
      state.postsData.push(newMessage);
      //after added new message in state we clear textarea in redux/state.js
      state.newPostText = "";
      //   break;
      return state;
    //   }
    default:
      return state;
  }
};

// ACTION CREATOR
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profilePageReducer;
