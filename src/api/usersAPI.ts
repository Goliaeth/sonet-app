import { axiosInstance, GetItemsType, APIResponseType } from "./api"


export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await axiosInstance.get<GetItemsType>(
      `users?page=${currentPage}&count=${pageSize}`
    )
    return response.data
  },
  async followUser(userId: number) {
    const response = await axiosInstance.post<APIResponseType>(`follow/${userId}`)
    return response.data
  },
  async unfollowUser(userId: number) {
    const response = await axiosInstance.delete<APIResponseType>(`follow/${userId}`)
    return response.data
  },
}
