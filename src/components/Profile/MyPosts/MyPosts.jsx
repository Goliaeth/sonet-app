import Post from "./Post/Post";
import classes from "./MyPosts.module.css";


const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const onAddPost = () => {
    props.addPost();
  };
  const onPostChange = (event) => {
    const text = event.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} onChange={onPostChange} placeholder="Want to post something?" />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
