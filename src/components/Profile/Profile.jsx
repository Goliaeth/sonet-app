import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
