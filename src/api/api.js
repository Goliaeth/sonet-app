import * as axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7916",
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  checkAuth() {
    return axiosInstance.get(`auth/me`).then((response) => response.data)
  },
  getUserInfo(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data)
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.data)
  },
  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data)
  },
}
