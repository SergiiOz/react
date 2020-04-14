// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter } from "react-router-dom";
import { state } from "./redux/State";
// import { addPost } from "./redux/State";
import { rerenderEntireTree } from "./render";

// let rerenderEntireTree = () => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <React.StrictMode>
//         <App
//           // postsData={state.postsData}
//           // dialogsData={state.dialogsData}
//           // messagesData={state.messagesData}
//           state={state}
//           addPost={addPost}
//         />
//       </React.StrictMode>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
// };

//run function from render.js
rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
