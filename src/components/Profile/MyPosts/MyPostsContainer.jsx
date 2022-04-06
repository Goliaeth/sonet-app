import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  const onNewPostTextChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      updateNewPostText={onNewPostTextChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
