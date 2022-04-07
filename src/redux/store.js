import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";




const store = {
  _state: {
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
      newPostText: "",
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
      newMessageText: "",
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
  },
  _callSubscriber() {
    console.log("no subscribers (observers)");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state)
  },
};

export default store;
// window.store = store;
