import { postRequest } from "./apiService";
import { endpoints } from "./api";
export const notifyBackend = async (fileName) => {
    const token = localStorage.getItem("token");
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await postRequest(endpoints.import, "/import/CreateUploadJob", { fileName }, headers);
};