import { PohotosType, ProfileType } from "../types/types"
import { axiosInstance, APIResponseType } from "./api"

type SavePhotoResponseType = {
  photos: PohotosType
}

export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await axiosInstance.get<ProfileType>(`profile/${userId}`)
    return response.data
  },
  async getStatus(userId: number) {
    const response = await axiosInstance.get<string>(`profile/status/${userId}`)
    return response.data
  },
  async updateStatus(status: string) {
    const response = await axiosInstance.put<APIResponseType>(`profile/status`, {
      status,
    })
    return response.data
  },
  async savePhoto(photo: File) {
    const formData = new FormData()
    formData.append("image", photo)
    const response = await axiosInstance.put<APIResponseType<SavePhotoResponseType>>(
      `profile/photo`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return response.data
  },
  async updateProfile(profileData: ProfileType) {
    const response = await axiosInstance.put<APIResponseType>(`profile`, profileData)
    return response.data
  },
}
