import { ThunkAction } from "redux-thunk"
import { profileAPI } from "../api/profileAPI"
import { PostType, PohotosType, ProfileType } from "../types/types"
import { AppStateType } from "./reduxStore"

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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST:{
      const newPost = {
        id: 5,
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }}

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
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

    case SAVE_PHOTO_SUCCESS:{
      // ! Из-за возможного null получается чо нельзя null.photos = action.photos
      // ! Выяснить что делать в таких случаях
      if (state.profile) {
        return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
        }}
        return state
      }

    default:
      return state
  }
}

type ActionsTypes =
  | AddPostActionType
  | DeletePostActionType
  | SetUserProfileActionType
  | SetUserStatusActionType
  | SavePhotoSuccessActionType

type AddPostActionType = {
  type: typeof ADD_POST
  text: string
}
export const addPostActionCreator = (text: string): AddPostActionType => ({ type: ADD_POST, text })
type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePostActionCreator = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
})
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(data))
}
type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  } catch (error) {
    console.log(error)
    // some logic with different error codes
  }
}
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PohotosType
}
export const savePhotoSuccess = (photos: PohotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
})
export const savePhoto = (photo: PohotosType): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profileData: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.updateProfile(profileData)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else if (response.data.resultCode === 1) {
    return response.data.messages[0]
  }
}

export default profileReducer
