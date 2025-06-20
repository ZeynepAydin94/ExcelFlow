import { getRequest, postRequest } from "./apiService";
import { endpoints } from "./api";
export const authService = {
    async login(email, password) {
        const response = await postRequest(endpoints.auth, "/Auth/token", { email, password });
        return response;
    },

    async fetchUser(token) {
        const response = await getRequest(endpoints.auth, "/Auth/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    },
};