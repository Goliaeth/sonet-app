import { profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"

const initialState = {
  posts: [
    {
      id: 1,
      message: "Hello!",
      likesCount: 10,
    },
    {
      id: 2,
      message: "How are you?",
      likesCount: 15,
    },
    {
      id: 3,
      message: "Bla-bla-bla",
      likesCount: 7,
    },
  ],
  profile: null,
  status: "------",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p !== action.postId),
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      }

    default:
      return state
  }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text })
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data))
  })
}
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUserStatus(response.data))
  })
}
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
}

export default profileReducer
