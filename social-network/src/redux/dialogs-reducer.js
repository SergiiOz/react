export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsPageReducer = (state, action) => {
  //==========================================
  // change newMessageText and addMessage
  //==========================================

  switch (action.type) {
    //change newMessageText from Dialogs/
    //   if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.textMessage;
      return state;
    //   }

    //   if (action.type === ADD_MESSAGE) {
    //create new message
    case ADD_MESSAGE:
      let newMessageToMessageData = {
        id: 6,
        text: state.newMessageText,
      };

      state.messagesData.push(newMessageToMessageData);
      //after added new message in state we clear textarea in redux/state.js
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
  //   }
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

export default dialogsPageReducer;
