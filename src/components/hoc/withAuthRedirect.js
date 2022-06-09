import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate replace to={"/login"} />
    return <Component {...props} />
  }

  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  })

  return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
