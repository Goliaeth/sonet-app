import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img className={classes.panorama} src="panorama.jpg" alt="panorama" />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
