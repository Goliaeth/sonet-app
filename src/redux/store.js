const store = {
  _callSubscriber() {
    console.log('no subscribers (observers)');
  }, 
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
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);    
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  getState() {
    
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
};

export default store;
window.store = store;
