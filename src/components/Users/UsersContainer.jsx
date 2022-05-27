import React from "react"
import { connect } from "react-redux"
import {
  follow,
  setCurrentPage,
  unfollow,
  requestUsers,
} from "../../redux/usersReducer"
import Preloader from "../common/Preloader/Preloader"
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
    const { currentPage, pageSize } = this.props
    if (this.props.users.length === 0) {
      this.props.requestUsers(currentPage, pageSize)
    }
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, pageSize)
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
)(UsersContainer)
