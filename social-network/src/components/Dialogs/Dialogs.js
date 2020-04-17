import React from "react";
import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  //method map for dialogs
  let dialogsElement = props.state.dialogsData.map((dialog) => {
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
  let messagesElement = props.state.messagesData.map((message) => {
    return <Message key={message.id} message={message.text} id={message.id} />;
  });

  //create ref, access to textarea
  let newMessage = React.createRef();

  const addMessageFromTextArea = () => {
    //add message to State
    // props.addMessage();
    props.dispatch({ type: "ADD-MESSAGE" });
    //after get value we clear textarea in redux/state.js
    //after clear textarea
    // newMessage.current.value = "";
  };

  let changeMessageArea = () => {
    //get value from input
    let textFromTextarea = newMessage.current.value;
    // props.updateNewMessageText(textFromTextarea);
    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      textMessage: textFromTextarea,
    });
  };

  return (
    <div className={styles.dialogsWrapper}>
      <h2 className={styles.title}>Dialogs</h2>
      {/* fild for new message */}
      <label htmlFor="story">New message:</label>
      <br />
      <textarea
        ref={newMessage}
        onChange={changeMessageArea}
        id="story"
        name="story"
        rows="5"
        cols="33"
        // defaultValue="write text..."
      ></textarea>
      <br />
      <button onClick={addMessageFromTextArea}>Add post</button>

      <div className={styles.content}>
        <ul className={styles["dialogs-list"]}>
          {/* <DialogItem id="1" name="John" />
          <DialogItem id="3" name="Serg" /> */}
          {dialogsElement}
        </ul>

        <ul className={styles["messages-list"]}>
          {/* <Message message="How are you" />
          <Message message="Hi!!" /> */}
          {messagesElement}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
