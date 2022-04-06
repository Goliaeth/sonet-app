import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer"


const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  const onNewPostTextChange = (event) => {
    const text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={props.profilePage.newPostText} onChange={onNewPostTextChange} placeholder="Want to post something?" />
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
