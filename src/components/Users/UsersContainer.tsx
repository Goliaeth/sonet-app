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
import { UserType } from "../../types/types"
import { AppStateType } from "../../redux/reduxStore"

type MapStatePropsType = {
  users: Array<UserType>
  totalUsersCount: number
  pageSize: number
  currentPage: number 
  isFetching: boolean
  isFollowingInProgress: Array<number>
}
type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (pageNumber: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    if (this.props.users.length === 0) {
      this.props.requestUsers(currentPage, pageSize)
    }
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        <h1>{this.props.pageTitle}</h1>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // setIsFollowingInProgress={this.props.setIsFollowingInProgress}
          isFollowingInProgress={this.props.isFollowingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
  })
)(UsersContainer)
