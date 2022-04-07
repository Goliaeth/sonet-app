import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  // const state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onNewPostTextChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onNewPostTextChange}
            addPost={addPost}
          />          
        )
      }}

    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
