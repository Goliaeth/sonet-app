import { usersAPI } from "../api/api"
import { UserType } from "../types/types"
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
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [] as Array<number>, // array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })
type TagFollowActionType = {
  type: typeof FOLLOW
  userId: number
}
export const tagFollow = (userId: number): TagFollowActionType => ({ type: FOLLOW, userId })
type TagUnfollowActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const tagUnfollow = (userId: number): TagUnfollowActionType => ({ type: UNFOLLOW, userId })
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
})
type SetIsFetchingActionType = {
  type: typeof SET_IS_FETCHING
  isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
  type: SET_IS_FETCHING,
  isFetching,
})
type SetIsFollowingInProgressActionType = {
  type: typeof SET_IS_FOLLOWING_IN_PROGRESS
  isFollowingInProgress: boolean
  userId: number
}
export const setIsFollowingInProgress = (isFollowingInProgress: boolean, userId: number): SetIsFollowingInProgressActionType => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  isFollowingInProgress,
  userId,
})

//thunks
export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true))
  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(setIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(setIsFollowingInProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setIsFollowingInProgress(false, userId))
}
export const follow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    tagFollow
  )
}
export const unfollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    tagUnfollow
  )
}

export default usersReducer
