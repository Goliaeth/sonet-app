const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS"

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            }
          }
          return user
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
        isFollowingInProgress: action.isFollowingInProgress,
      }

    default:
      return state
  }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
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
export const setIsFollowingInProgress = (isFollowingInProgress) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  isFollowingInProgress,
})

export default usersReducer
