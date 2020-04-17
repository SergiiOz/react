const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    // PROFILE
    profilePage: {
      postsData: [
        { id: 1, message: "Are you here first time?", likesCount: 24 },
        { id: 2, message: "It's my first post.", likesCount: 15 },
        { id: 3, message: "So far...", likesCount: 9 },
        { id: 4, message: "I have done it.", likesCount: 19 },
      ],
      newPostText: "default post text",
    },

    // DIALOGS
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Johgn",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU",
        },
        {
          id: 2,
          name: "Alex",
          photo:
            "https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg",
        },
        {
          id: 3,
          name: "Serg",
          photo:
            "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
        },
        {
          id: 4,
          name: "Marta",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4LRADmE5sIaCA5kC7SaM2WDgzUH_ngB30-rgL6xfIcFdbnsUW&usqp=CAU",
        },
        {
          id: 5,
          name: "Siri",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdRR7oJMDq8orxsM4KGIdD9rCsapBplruaAnNvwRhezRanah8i&usqp=CAU",
        },
      ],

      messagesData: [
        { id: 1, text: "Hello!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "I try use React" },
        { id: 4, text: "Tea or coffee?" },
        { id: 5, text: "What do you do?" },
      ],

      newMessageText: "",
    },

    sideBar: {
      friends: [
        {
          id: 1,
          name: "Johgn",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU",
        },
        {
          id: 2,
          name: "Marta",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4LRADmE5sIaCA5kC7SaM2WDgzUH_ngB30-rgL6xfIcFdbnsUW&usqp=CAU",
        },
        {
          id: 3,
          name: "Serg",
          photo:
            "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
        },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  //if we have a change - run rerender
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //===================
  // || DISPATCH
  //===================

  dispatch(action) {
    //==========================================
    // change newPostText and addPost
    //==========================================
    //add new message to ProfilePage/postsData

    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    // action{type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      //create new message
      let newMessage = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      //add new message to array pastsData
      this._state.profilePage.postsData.push(newMessage);
      //after added new message in state we clear textarea in redux/state.js
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }

    //==========================================
    // change newMessageText and addMessage
    //==========================================

    //change newMessageText from Dialogs/
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.textMessage;
      this._callSubscriber(this._state);
    }

    if (action.type === ADD_MESSAGE) {
      //create new message
      let newMessageToMessageData = {
        id: 6,
        text: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messagesData.push(newMessageToMessageData);
      //after added new message in state we clear textarea in redux/state.js
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    }
  },
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

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    textMessage: text,
  };
};

export default store;

//если нам понадобится 'store'  чтобы к нему обратится
window.store = store;
//==========================================
// change newPostText and addPost
//==========================================
//add new message to ProfilePage/postsData
// addPost() {
//   //create new message
//   let newMessage = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   //add new message to array pastsData
//   this._state.profilePage.postsData.push(newMessage);
//   //after added new message in state we clear textarea in redux/state.js
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },

//change newPostText
// updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },

//==========================================
// change newMessageText and addMessage
//==========================================

//change newMessageText from Dialogs/
// updateNewMessageText(textMessage) {
//   this._state.dialogsPage.newMessageText = textMessage;
//   this._callSubscriber(this._state);
// },

// //add new message to dialogsPage.messagesData
// addMessage() {
//   //create new message
//   let newMessageToMessageData = {
//     id: 6,
//     text: this._state.dialogsPage.newMessageText,
//   };

//   this._state.dialogsPage.messagesData.push(newMessageToMessageData);
//   //after added new message in state we clear textarea in redux/state.js
//   this._state.dialogsPage.newMessageText = "";
//   this._callSubscriber(this._state);
// },
