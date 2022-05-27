import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import nullUserpic from "../../../assets/images/anonim-ava.png"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.infoPanel}>
        <img
          src={
            profile.photos.large != null ? profile.photos.large : nullUserpic
          }
          alt='profile-avatar'
        />
        <div>
          <span>{profile.fullName}</span>
          <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
