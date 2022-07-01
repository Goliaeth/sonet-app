import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import { PohotosType, ProfileType } from "../../types/types"

type PropsType = {
  profile: ProfileType
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: PohotosType) => void
  saveProfile: (profileData: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
