import { profileAPI } from "../api/api"

const ADD_POST = "sonet-app/profile/ADD_POST"
const DELETE_POST = "sonet-app/profile/DELETE_POST"
const SET_USER_PROFILE = "sonet-app/profile/SET_USER_PROFILE"
const SET_USER_STATUS = "sonet-app/profile/SET_USER_STATUS"
const SAVE_PHOTO_SUCCESS = "sonet-app/profile/SAVE_PHOTO_SUCCESS"

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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
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
export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(data))
}
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
})
export const savePhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.savePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export default profileReducer
