import { profileAPI } from "../api/api"
import { PostType, PohotosType, ProfileType } from "../types/types"

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

const profileReducer = (state = initialState, action: any) => {
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
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(data))
}
type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
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
export const savePhoto = (photo: PohotosType) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profileData: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const response = await profileAPI.updateProfile(profileData)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else if (response.data.resultCode === 1) {
    return response.data.messages[0]
  }
}

export default profileReducer
