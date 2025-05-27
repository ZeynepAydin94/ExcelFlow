import { getRequest, postRequest } from "./apiService";

export const authService = {
    async login(email, password) {
        const response = await postRequest("/Auth/token", { email, password });
        return response;
    },

    async fetchUser(token) {
        const response = await getRequest("/Auth/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    },
};