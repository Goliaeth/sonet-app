import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.panorama} src="panorama.jpg" alt="panorama" />
      <div className={classes.infoPanel}>
        <img src="main-ava.png" alt="main-avatar" />
        <div>Description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
