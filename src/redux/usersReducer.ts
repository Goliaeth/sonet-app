import { usersAPI } from "../api/usersAPI"
import { UserType } from "../types/types"
import { updateObjectInArray } from "../utils/objectHelpers"
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsType } from "./reduxStore"
import { Dispatch } from "redux"

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [] as Array<number>, // array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      }

    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      }

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount,
      }

    case 'SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case 'SET_IS_FOLLOWING_IN_PROGRESS':
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

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),
  tagFollow: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),
  tagUnfollow: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),
  setTotalUsersCount: (totalCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      totalCount,
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: 'SET_IS_FETCHING',
      isFetching,
    } as const),
  setIsFollowingInProgress: (isFollowingInProgress: boolean, userId: number) =>
    ({
      type: 'SET_IS_FOLLOWING_IN_PROGRESS',
      isFollowingInProgress,
      userId,
    } as const),
}

//thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers =
  (page: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setIsFetching(true))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.setIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }

const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.setIsFollowingInProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.setIsFollowingInProgress(false, userId))
}
export const follow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      actions.tagFollow
    )
  }
export const unfollow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(usersAPI),
      actions.tagUnfollow
    )
  }

export default usersReducer
