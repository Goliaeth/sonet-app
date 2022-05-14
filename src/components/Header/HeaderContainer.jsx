import React from "react"
import { connect } from "react-redux"
import { checkAuth } from "../../redux/authReducer"
import Header from "./Header"

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.checkAuth()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, {
  checkAuth,
})(HeaderContainer)
