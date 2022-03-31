import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hello!" likesCount="30" />
        <Post message="How are you?" likesCount="10" />
        <Post message="Bla-bla-bla" likesCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
