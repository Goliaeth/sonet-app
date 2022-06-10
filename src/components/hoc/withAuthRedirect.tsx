import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/reduxStore"

const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) return <Navigate replace to={"/login"} />
    return <Component {...props} />
  }

  const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
  })

  return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
