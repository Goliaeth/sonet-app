import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profileReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import { compose } from "redux"
import withRouter from "../hoc/withRouter"
import { AppStateType } from "../../redux/reduxStore"
import { PohotosType, ProfileType } from "../../types/types"

type MapStatePropsType = {
  profile: ProfileType
  status: string
  userId: number | null
}
type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
  savePhoto: (photo: PohotosType) => void
  saveProfile: (photo: PohotosType) => void
}
type OwnPropsType = {
  params: any
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.props.userId
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.params.userId} />
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
