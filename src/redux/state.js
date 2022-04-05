import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
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
    ],
    newPostText: 'type here',
  },
  dialogsPage: {
    dialogs: [
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
    ],
    messages: [
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
    ],
  },
  sidebar: {
    friends: [
      {
        id: 1,
        name: "Ivan",
        avatar: "",
      },
      {
        id: 2,
        name: "Sasha",
        avatar: "",
      },
      {
        id: 3,
        name: "Michael",
        avatar: "",
      },
    ],
  },
};

export const addPost = (postMessage) => {
  
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const changePostText = (postText) => {
  state.profilePage.newPostText = postText;
  rerenderEntireTree(state);
}

export default state;
