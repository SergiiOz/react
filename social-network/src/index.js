import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import store from "./redux/store"; //// this was early
import store from "./redux/redux-store";
import { Provider } from "react-redux";

// import {
//   addPost,
//   addMessage,
//   updateNewPostText,
//   updateNewMessageText,
//   subscribe,
// } from "./redux/State";

// export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App
        // store={store}
        // state={state}
        //связываем метод addPost со store c помощью bind, чтобы this указывало на store при передаче дальше
        //// dispatch={store.dispatch.bind(store)}
        // postsData={state.postsData}
        // dialogsData={state.dialogsData}
        // messagesData={state.messagesData}
        //связываем метод addPost со store c помощью bind, чтобы this указывало на store при передаче дальш
        // addPost={store.addPost.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
// };

//pass in function state = store.getState()
// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
