import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "98ca0a48-2755-4c64-8a17-87fb70df4a7a"
    }
});


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },
    getUserProfile: (userId: number) => {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },

    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },

    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },
    authorization: () => {
        return instance.get(`auth/me`).then((response) => response.data);
    }
}


