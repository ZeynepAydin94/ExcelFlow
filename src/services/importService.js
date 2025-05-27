import { postRequest } from "./apiService";
export const notifyBackend = async (fileUrl) => {
    const token = localStorage.getItem("token");
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    // return await postRequest("/import/submit-url", { fileUrl }, headers);
};