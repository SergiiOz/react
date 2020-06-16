import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
// import {
//   addMessageActionCreator,
//   updateNewMessageTextActionCreator,
// } from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  //method map for dialogs
  let dialogsElement = state.dialogsData.map((dialog) => {
    return (
      <DialogItem
        key={dialog.id}
        id={dialog.id}
        name={dialog.name}
        photo={dialog.photo}
      />
    );
  });

  //method map for messages //
  let messagesElement = state.messagesData.map((message) => {
    return <Message key={message.id} message={message.text} id={message.id} />;
  });

  //create ref, access to textarea
  // let newMessage = React.createRef(); - реф не буду

  //value from refux/store._state
  // let newMessageTextFromState = props.state.newMessageText;

  const onAddMessageFromTextArea = () => {
    //add message to State
    props.addMessage();
    // props.dispatch({ type: "ADD-MESSAGE" });
    // props.dispatch(addMessageActionCreator());
    //after get value we clear textarea in redux/state.js
    //after clear textarea
    // newMessage.current.value = "";
  };

  let onChangeMessageArea = (event) => {
    //get value from input
    // let textFromTextarea = newMessage.current.value;
    let textFromTextarea = event.target.value;
    props.updateNewMessageText(textFromTextarea);
    // props.dispatch({
    //   type: "UPDATE-NEW-MESSAGE-TEXT",
    //   textMessage: textFromTextarea,
    // });
    // props.dispatch(updateNewMessageTextActionCreator(textFromTextarea));
  };

  //Redirect to LOGIN if we don't auth on server
  if (props.isAuth === true) return <Redirect to="/login" />;

  return (
    <div className={styles.dialogsWrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      {/* fild for new message */}
      <label htmlFor="story">New message:</label>
      <br />
      <textarea
        // ref={newMessage} we remove
        //value from redux/store._state
        value={state.newMessageText}
        onChange={onChangeMessageArea}
        placeholder="write text ..."
        id="story"
        name="story"
        rows="5"
        cols="33"
        // defaultValue="write text..."
      ></textarea>
      <br />
      <button onClick={onAddMessageFromTextArea}>Add post</button>

      <div className={styles.content}>
        <ul className={styles['dialogs-list']}>
          {/* <DialogItem id="1" name="John" />
          <DialogItem id="3" name="Serg" /> */}
          {dialogsElement}
        </ul>

        <ul className={styles['messages-list']}>
          {/* <Message message="How are you" />
          <Message message="Hi!!" /> */}
          {messagesElement}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
