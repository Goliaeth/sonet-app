import { ResultCodesEnum } from "../api/api"
import { profileAPI } from "../api/profileAPI"
import { PostType, PohotosType, ProfileType } from "../types/types"
import { BaseThunkType, InferActionsType } from "./store"

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
type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "sonet-app/profile/ADD_POST":{
      const newPost = {
        id: 5,
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }}

    case "sonet-app/profile/DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      }

    case "sonet-app/profile/SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      }

    case "sonet-app/profile/SET_USER_STATUS":
      return {
        ...state,
        status: action.status,
      }

    case "sonet-app/profile/SAVE_PHOTO_SUCCESS":{
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

export const actions = {
  addPostActionCreator: (text: string) => ({ type: 'sonet-app/profile/ADD_POST', text } as const),
  deletePostActionCreator: (postId: number) => ({
  type: 'sonet-app/profile/DELETE_POST',
  postId,
} as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'sonet-app/profile/SET_USER_PROFILE', profile } as const),
  setUserStatus: (status: string) => ({ type: 'sonet-app/profile/SET_USER_STATUS', status } as const),
  savePhotoSuccess: (photos: PohotosType) => ({
    type: 'sonet-app/profile/SAVE_PHOTO_SUCCESS',
    photos,
  } as const),
}

type ThunkType = BaseThunkType<ActionsTypes>

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const profileData = await profileAPI.getProfile(userId)

  dispatch(actions.setUserProfile(profileData))
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
  const statusData = await profileAPI.getStatus(userId)

  dispatch(actions.setUserStatus(statusData))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const updateStatusData = await profileAPI.updateStatus(status)

    if (updateStatusData.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setUserStatus(status))
    }
  } catch (error) {
    console.log(error)
    // some logic with different error codes
  }
}

export const savePhoto = (photo: File): ThunkType => async (dispatch) => {
  const photosData = await profileAPI.savePhoto(photo)
  
  if (photosData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.savePhotoSuccess(photosData.data.photos))
  }
}
export const saveProfile = (profileData: ProfileType): BaseThunkType<ActionsTypes, Promise<string | undefined>> => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const updateProfileData = await profileAPI.updateProfile(profileData)
  if (updateProfileData.resultCode === ResultCodesEnum.Success) {
    dispatch(getUserProfile(userId))
  } else if (updateProfileData.resultCode === ResultCodesEnum.Error) {
    return updateProfileData.messages[0]
  }
}

export default profileReducer
