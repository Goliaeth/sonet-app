import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import { compose } from "redux"
import withRouter from "../hoc/withRouter"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.props.userId
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props} />
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
