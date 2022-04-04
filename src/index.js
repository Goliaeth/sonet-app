import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const posts = [
  {
    id: 1,
    message: "Hello!",
    likesCount: 10,
  },
  {
    id: 2,
    message: "How are you?",
    likesCount: 15,
  },
  {
    id: 3,
    message: "Bla-bla-bla",
    likesCount: 7,
  },
];
const dialogs = [
  {
    id: 1,
    name: "Ivan",
  },
  {
    id: 2,
    name: "Sasha",
  },
  {
    id: 3,
    name: "Valera",
  },
  {
    id: 4,
    name: "Viktor",
  },
  {
    id: 5,
    name: "Michael",
  },
  {
    id: 6,
    name: "Viktoria",
  },
];
const messages = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
];

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
