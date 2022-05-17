import Post from "./Post/Post"
import classes from "./MyPosts.module.css"
import { Form, Field } from "react-final-form"

const NewPostForm = (props) => {
  const onSubmit = (values, action) => {
    props.addPost(values.postText)
    action.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              placeholder='Want to post something?'
              name='postText'
              component='textarea'
            />
          </div>
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Add post
            </button>
          </div>
        </form>
      )}
    />
  )
}

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
