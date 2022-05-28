import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/objectHelpers"

const SET_USERS = "sonet-app/users/SET_USERS"
const FOLLOW = "sonet-app/users/FOLLOW"
const UNFOLLOW = "sonet-app/users/UNFOLLOW"
const SET_CURRENT_PAGE = "sonet-app/users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "sonet-app/users/SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "sonet-app/users/SET_IS_FETCHING"
const SET_IS_FOLLOWING_IN_PROGRESS =
  "sonet-app/users/SET_IS_FOLLOWING_IN_PROGRESS"

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case SET_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.isFollowingInProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      }

    default:
      return state
  }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const tagFollow = (userId) => ({ type: FOLLOW, userId })
export const tagUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
})
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
})
export const setIsFollowingInProgress = (isFollowingInProgress, userId) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  isFollowingInProgress,
  userId,
})

//thunks
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(setIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(setIsFollowingInProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setIsFollowingInProgress(false, userId))
}
export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    tagFollow
  )
}
export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    tagUnfollow
  )
}

export default usersReducer
