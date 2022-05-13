import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { setUserProfile } from "../../redux/profileReducer"
import { useParams } from "react-router-dom"
import { usersAPI } from "../../api/api"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = 2
    }
    usersAPI.getUserInfo(userId).then((data) => {
      this.props.setUserProfile(data)
    })
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
  setUserProfile,
})(WithUrlDataContainerComponent)
