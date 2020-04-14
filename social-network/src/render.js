import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import { state } from "./redux/State";
import { addPost } from "./redux/State";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          // postsData={state.postsData}
          // dialogsData={state.dialogsData}
          // messagesData={state.messagesData}
          state={state}
          addPost={addPost}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
