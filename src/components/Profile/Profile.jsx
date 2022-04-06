import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
