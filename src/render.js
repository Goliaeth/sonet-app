import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, changePostText } from "./redux/state";


export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} changePostText={changePostText}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
}