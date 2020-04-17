import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/State";

// import {
//   addPost,
//   addMessage,
//   updateNewPostText,
//   updateNewMessageText,
//   subscribe,
// } from "./redux/State";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          // postsData={state.postsData}
          // dialogsData={state.dialogsData}
          // messagesData={state.messagesData}
          state={state}
          //связываем метод addPost со store c помощью bind, чтобы this указывало на store при передаче дальше
          addPost={store.addPost.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
