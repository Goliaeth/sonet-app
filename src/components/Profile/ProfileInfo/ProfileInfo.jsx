import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.infoPanel}>
      <img src="main-ava.png" alt="main-avatar" />
      <div>Description</div>
    </div>
  );
};

export default ProfileInfo;
