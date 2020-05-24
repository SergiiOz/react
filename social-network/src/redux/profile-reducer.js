export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  postsData: [
    { id: 1, message: 'Are you here first time?', likesCount: 24 },
    { id: 2, message: "It's my first post.", likesCount: 15 },
    { id: 3, message: 'So far...', likesCount: 9 },
    { id: 4, message: 'I have done it.', likesCount: 19 },
  ],
  newPostText: 'default post text',
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  //==========================================
  // change newPostText and addPost
  //==========================================
  //add new message to ProfilePage/postsData

  switch (action.type) {
    //   if (action.type === UPDATE_NEW_POST_TEXT) {
    case UPDATE_NEW_POST_TEXT:
      //create clone 'state'
      return { ...state, newPostText: action.newText };
    // break;
    // return state;
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

      //create clone 'state'
      const newState = { ...state };
      //create clone 'pastsData'
      newState.postsData = [...state.postsData];
      //add new message to array pastsData
      newState.postsData.push(newMessage);
      //after added new message in state we clear textarea in redux/state.js
      newState.newPostText = '';
      //   break;
      return newState;
    //   }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

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

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export default profilePageReducer;
