import classes from "./Users.module.css"
import nullUserpic from "../../assets/images/anonim-ava.png"
import { NavLink } from "react-router-dom"
import { usersAPI } from "../../api/api"

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={
                props.currentPage === page ? classes.selectedPage : undefined
              }
              onClick={() => {
                props.onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    src={
                      user.photos.small != null
                        ? user.photos.small
                        : nullUserpic
                    }
                    alt='avatar'
                    className={classes.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.setIsFollowingInProgress(true, user.id)
                      usersAPI.unfollowUser(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.unfollow(user.id)
                        }
                        props.setIsFollowingInProgress(false, user.id)
                      })
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.setIsFollowingInProgress(true, user.id)
                      usersAPI.followUser(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(user.id)
                        }
                        props.setIsFollowingInProgress(false, user.id)
                      })
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Users
