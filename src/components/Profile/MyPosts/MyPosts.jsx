import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
