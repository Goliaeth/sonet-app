import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getUserInfo } from "../../redux/profileReducer"
import { useParams } from "react-router-dom"

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

const WithUrlDataContainerComponent = (props) => (
  <ProfileContainer {...props} params={useParams()} />
)

export default connect(mapStateToProps, {
  getUserInfo,
})(WithUrlDataContainerComponent)
