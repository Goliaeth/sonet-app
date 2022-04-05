// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";
// import { addPost } from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App state={state} addPost={addPost}/>
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
