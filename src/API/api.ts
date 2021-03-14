import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "98ca0a48-2755-4c64-8a17-87fb70df4a7a"
    }
});

export const authApi = {
    authorization: () => {
        return instance.get(`auth/me`).then((response) => response.data);
    },

    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance
            .post(`/auth/login`, {
                email,
                password,
                rememberMe
            })
            .then((response) => response.data);
    },
    logout: () => {
        return instance.delete(`/auth/login`);
    }
};

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },

    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },

    unfollowUser: (userId: number) => {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    }
};

export const profileAPI = {
    getUserProfile: (userId: number) => {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                console.error("Client message: You are not authorized");
            });
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`).then((response) => response.data);
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {
            status
        });
    }
};
