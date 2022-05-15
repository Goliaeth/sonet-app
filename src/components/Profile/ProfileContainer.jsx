import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getUserInfo } from "../../redux/profileReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import { compose } from "redux"
import withRouter from "../hoc/withRouter"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserInfo(userId)
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {
    getUserInfo,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
