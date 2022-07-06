import { usersAPI } from "../api/usersAPI"
import { UserType } from "../types/types"
import { updateObjectInArray } from "../utils/objectHelpers"
import { BaseThunkType, InferActionsType } from "./store"
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
type ActionsTypes = InferActionsType<typeof actions>

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'sonet-app/users/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      }

    case 'sonet-app/users/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      }

    case 'sonet-app/users/SET_USERS':
      return {
        ...state,
        users: action.users,
      }

    case 'sonet-app/users/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case 'sonet-app/users/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount,
      }

    case 'sonet-app/users/SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case 'sonet-app/users/SET_IS_FOLLOWING_IN_PROGRESS':
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

export const actions = {
  setUsers: (users: Array<UserType>) =>
    ({
      type: 'sonet-app/users/SET_USERS',
      users,
    } as const),
  tagFollow: (userId: number) =>
    ({
      type: 'sonet-app/users/FOLLOW',
      userId,
    } as const),
  tagUnfollow: (userId: number) =>
    ({
      type: 'sonet-app/users/UNFOLLOW',
      userId,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'sonet-app/users/SET_CURRENT_PAGE',
      currentPage,
    } as const),
  setTotalUsersCount: (totalCount: number) =>
    ({
      type: 'sonet-app/users/SET_TOTAL_USERS_COUNT',
      totalCount,
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: 'sonet-app/users/SET_IS_FETCHING',
      isFetching,
    } as const),
  setIsFollowingInProgress: (isFollowingInProgress: boolean, userId: number) =>
    ({
      type: 'sonet-app/users/SET_IS_FOLLOWING_IN_PROGRESS',
      isFollowingInProgress,
      userId,
    } as const),
}

//thunks

export const requestUsers =
  (page: number, pageSize: number): BaseThunkType<ActionsTypes> =>
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
  (userId: number): BaseThunkType<ActionsTypes> =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      actions.tagFollow
    )
  }
export const unfollow =
  (userId: number): BaseThunkType<ActionsTypes> =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(usersAPI),
      actions.tagUnfollow
    )
  }

export default usersReducer
