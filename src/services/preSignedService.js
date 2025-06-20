import { postRequest } from "./apiService";
import { endpoints } from "./api";
import { ConnectContactLens } from "aws-sdk";


export const getPreSignedUrl = async () => {
    const token = localStorage.getItem("token");
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return await postRequest(endpoints.import, "/s3/GeneratePreSignedUrl", {}, headers);
};


export const putFileToS3 = async (file, url) => {
    try {
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": file.type
            },
            body: file
        });

    } catch (err) {
        console.error("PUT error:", err);
        throw new Error("S3'e yükleme başarısız");
    }
};