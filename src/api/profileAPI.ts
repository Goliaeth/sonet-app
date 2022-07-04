import { ProfileType } from "../types/types";
import { axiosInstance } from "./api";


export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await axiosInstance.get(`profile/${userId}`);
    return response.data;
  },
  getStatus(userId: number) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return axiosInstance.put(`profile/status`, { status });
  },
  savePhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProfile(profileData: ProfileType) {
    return axiosInstance.put(`profile`, profileData);
  },
};
