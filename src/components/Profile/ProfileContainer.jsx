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

class ProfileContainer extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.params.userId} />
  }
}

const mapStateToProps = (state) => ({
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
