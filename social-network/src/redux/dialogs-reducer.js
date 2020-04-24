export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
  //==========================================
  // change newMessageText and addMessage
  //==========================================

  switch (action.type) {
    //change newMessageText from Dialogs/
    //   if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      let newState = { ...state };
      newState.newMessageText = action.textMessage;
      return newState;
    }

    //   }

    //   if (action.type === ADD_MESSAGE) {
    //create new message
    case ADD_MESSAGE: {
      return {
        //copy state
        ...state,
        messagesData: [
          //copy array messagesData
          ...state.messagesData,
          //add new object to array messagesData (analog method .push)
          {
            id: 6,
            text: state.newMessageText,
          },
        ],
        //set empty string
        newMessageText: "",
      };
      // let newMessageToMessageData = {
      //   id: 6,
      //   text: state.newMessageText,
      // };
      // let newState = { ...state}
      // newState.messagesData = [...state.messagesData];
      // newState.messagesData.push(newMessageToMessageData);
      // //after added new message in state we clear textarea in redux/state.js
      // newState.newMessageText = "";
      // return newState;
    }
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
