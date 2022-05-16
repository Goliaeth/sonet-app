import ProfileInfo from "./ProfileInfo/ProfileInfo"
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
