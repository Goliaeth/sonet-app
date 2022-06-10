import React from "react"
import { useParams } from "react-router-dom"

const withRouter = (Component: any) => {
  const RedirectComponent = (props: any) => {
    return <Component {...props} params={useParams()} />
  }

  return RedirectComponent
}

export default withRouter
