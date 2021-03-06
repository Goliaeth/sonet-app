import React, { useState, useEffect } from "react"

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      ) : (
        <div>
          <input
            autoFocus
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </>
  )
}

export default ProfileStatus
