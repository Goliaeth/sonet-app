import React from "react"
import { connect } from "react-redux"
import {
  follow,
  setCurrentPage,
  unfollow,
  requestUsers,
} from "../../redux/usersReducer"
import Preloader from "../common/Preloader/Preloader"
// import withAuthRedirect from "../hoc/withAuthRedirect"
import Users from "./Users"
import { compose } from "redux"
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/usersSelectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setIsFollowingInProgress={this.props.setIsFollowingInProgress}
          isFollowingInProgress={this.props.isFollowingInProgress}
        />
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isFollowingInProgress: state.usersPage.isFollowingInProgress,
//   }
// }
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
  })
  // withAuthRedirect
)(UsersContainer)
