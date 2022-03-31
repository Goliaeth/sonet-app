import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <p>New Post form</p>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>Posts List</div>
      <Post />
    </div>
  );
};

export default MyPosts;
