import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state, { addPost, updateNewPostText, subscribe } from "./redux/state";
import store from "./redux/store"


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} addPost={store.addPost.bind(store)} changePostText={store.updateNewPostText.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
 
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
