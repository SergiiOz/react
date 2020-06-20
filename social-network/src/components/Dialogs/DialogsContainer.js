// import React from "react";
// import styles from "./Dialogs.module.scss";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    //pass dialogsPage to component 'Dialogs' in props
    dialogsPage: state.dialogsPage,
    //if auth on server true or false -> moved to hoc/withAuthRedirectComponent
    // isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    //pass methods to component 'Dialogs' in props
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (textFromTextarea) => {
      let action = updateNewMessageTextActionCreator(textFromTextarea);
      dispatch(action);
    },
  };
};

//--moved to compose()
//hoc 'withAuthRedirect' wrapp Dialogs -> make redirect to Login page if user doesn't auth
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//===============================================
// old code -> moved to hoc 'withAuthRedirect'
// let AuthRedirectComponent = (props) => {
//   if (this.props.isAuth === false) return <Redirect to="/login" />;
//   return <Dialogs {...props} />;
// };

//--moved to compose() --
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;

//   const addMessageFromTextArea = () => {
//     //add message to State
//     // props.addMessage();
//     // props.dispatch({ type: "ADD-MESSAGE" });
//     props.store.dispatch(addMessageActionCreator());
//     //after get value we clear textarea in redux/state.js
//     //after clear textarea
//     // newMessage.current.value = "";
//   };

//   let changeMessageArea = (textFromTextarea) => {
//     //get value from input
//     // let textFromTextarea = newMessage.current.value;
//     // let textFromTextarea = event.target.value;
//     // props.updateNewMessageText(textFromTextarea);
//     // props.dispatch({
//     //   type: "UPDATE-NEW-MESSAGE-TEXT",
//     //   textMessage: textFromTextarea,
//     // });
//     let action = updateNewMessageTextActionCreator(textFromTextarea);
//     props.store.dispatch(action);
//   };

//   return (
//     <Dialogs
//       updateNewMessageText={changeMessageArea}
//       addMessage={addMessageFromTextArea}
//       dialogsPage={state}

//       // newMessageTextFromState={state.dialogsPage.newMessageText}
//       // dialogsData={state.dialogsPage.dialogsData}
//       // messagesData={state.dialogsPage.messagesData}
//     />
//   );
// };

// export default DialogsContainer;
