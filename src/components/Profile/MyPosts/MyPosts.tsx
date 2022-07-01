import React from "react"
import Post from "./Post/Post"
import classes from "./MyPosts.module.css"
import NewPostForm from "./NewPostForm/NewPostForm"
import { PostType, ProfileType } from "../../../types/types"

type ProfilePageType = {
  posts: PostType[]
  profile: ProfileType
  Status: string
}

type MyPostsPropsType = {
  profilePage: ProfilePageType
  addPost: (postText: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {
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
