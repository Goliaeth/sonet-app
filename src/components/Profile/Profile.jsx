import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} changePostText={props.changePostText}/>
    </div>
  );
};

export default Profile;
