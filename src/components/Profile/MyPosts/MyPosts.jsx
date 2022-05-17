import Post from "./Post/Post"
import classes from "./MyPosts.module.css"
import NewPostForm from "./NewPostForm/NewPostForm"

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <NewPostForm addPost={props.addPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
