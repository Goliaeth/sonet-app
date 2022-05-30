import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import nullUserpic from "../../../assets/images/anonim-ava.png"
import ProfileStatus from "./ProfileStatus"
import React, { useState } from "react"
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
}) => {
  const [editMode, setEditMode] = useState(false)

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
      </div>
    )
  }

  const ProfileData = ({ profile, isOwner, activateEditMode }) => {
    return (
      <div>
        <div>
          <b>Full name:</b> {profile.fullName}
        </div>
        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>Looking for a job description:</b>{" "}
            {profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me:</b> {profile.aboutMe || "----"}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key] || "----"}
            />
          ))}
        </div>
        {isOwner && (
          <div>
            <button onClick={activateEditMode}>edit profile info</button>
          </div>
        )}
      </div>
    )
  }

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    // props.updateUserStatus(status)
  }

  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.infoPanel}>
        <img src={profile.photos.large || nullUserpic} alt='profile-avatar' />
        {isOwner && <input type='file' onChange={onProfilePhotoSelected} />}
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            deactivateEditMode={deactivateEditMode}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={activateEditMode}
          />
        )}
      </div>
    </div>
  )
}

export default ProfileInfo
