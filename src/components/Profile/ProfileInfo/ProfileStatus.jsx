import React from "react"
import classes from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  enableEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  disableEditMode = () => {
    this.setState({
      editMode: false,
    })
  }
  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              autoFocus
              onBlur={this.disableEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
