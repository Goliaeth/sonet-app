import React from "react"
import { connect } from "react-redux"
import { logout } from "../../redux/authReducer"
import { AppStateType } from "../../redux/store"
import Header from "./Header"

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}
type MapDispatchPropsType = {
  logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType
class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer)
