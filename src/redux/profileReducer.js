import { profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
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
  newPostText: "",
  profile: null,
  status: "------",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_USER_STATUS:
      return {
        ...state,
        status: !action.status ? ":( статус не указан..." : action.status,
      }

    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
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
