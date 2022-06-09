
import React from "react"
import { useParams } from "react-router-dom"

const withRouter = (Component) => {
  const RedirectComponent = (props) => {
    return <Component {...props} params={useParams()} />
  }

  return RedirectComponent
}

export default withRouter
