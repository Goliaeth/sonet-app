import React from "react"
import classes from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }
  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
