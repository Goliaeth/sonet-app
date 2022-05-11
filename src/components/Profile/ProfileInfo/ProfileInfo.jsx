import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import panorama from "../../../assets/images/panorama.jpg";
import nullUserpic from "../../../assets/images/anonim-ava.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={classes.panorama} src={panorama} alt="panorama" />
      <div className={classes.infoPanel}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : nullUserpic} alt="profile-avatar" />
        <div>Description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
