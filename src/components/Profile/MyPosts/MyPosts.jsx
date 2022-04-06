import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/store"


const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  const newPostElement = React.createRef();
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  const onNewPostTextChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onNewPostTextChange} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
