import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
