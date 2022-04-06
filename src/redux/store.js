const ADD_POST = 'ADD_POST'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

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
      newPostText: "type here",
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
      newMessageText: "enter message",
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
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;

      case SEND_MESSAGE:
        const newMessage = {
          id: 4,
          text: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;

      default:
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST, })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  })
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  })

export default store;
window.store = store;
