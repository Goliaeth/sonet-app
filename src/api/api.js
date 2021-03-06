import * as axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7916",
    // "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7915", // fake-code for error
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
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

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data)
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return axiosInstance.put(`profile/status`, { status })
  },
  savePhoto(photo) {
    const formData = new FormData()
    formData.append("image", photo)
    return axiosInstance.put(`profile/photo`, formData, {
      "Content-Type": "multipart/form-data",
    })
  },
  updateProfile(profileData) {
    return axiosInstance.put(`profile`, profileData)
  },
}

export const authAPI = {
  me() {
    return axiosInstance.get(`auth/me`).then((response) => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return axiosInstance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  logout() {
    return axiosInstance.delete(`auth/login`)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance.get(`security/get-captcha-url`)
  },
}
