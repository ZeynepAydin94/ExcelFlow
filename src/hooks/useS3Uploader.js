import { useState } from "react";
import { uploadToS3 } from "../services/s3Service";
import { notifyBackend } from "../services/importService"; // backend'e URL gönderme

export const useS3Uploader = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadAndNotify = async (file) => {
        if (!file) {
            setStatus("Dosya seçilmedi.");
            return;
        }

        setLoading(true);
        setStatus("Yükleniyor...");

        try {
            const s3Result = await uploadToS3(file);
            await notifyBackend(s3Result.Location); // backend'e dosya URL'si gönder
            setStatus("Yükleme ve bildirim başarılı ✅");
        } catch (err) {
            console.error(err);
            setStatus("Yükleme hatası: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return { uploadAndNotify, loading, status };
};