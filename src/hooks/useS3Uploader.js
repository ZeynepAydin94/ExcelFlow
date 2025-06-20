import { useState } from "react";
import { getPreSignedUrl, putFileToS3 } from "../services/preSignedService";
import { notifyBackend } from "../services/importService"; // varsa kullan, yoksa çıkar

export const useS3Uploader = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadAndNotify = async (file) => {
        if (!file) {
            setStatus("Dosya seçilmedi.");
            return;
        }

        setLoading(true);
        setStatus("Upload başlatıldı...");

        try {
            // 1. Pre-signed URL al
            const { url, fileName } = await getPreSignedUrl();

            // 2. Dosyayı S3'e yükle
            await putFileToS3(file, url);

            // 3. (İsteğe bağlı) Backend'e yüklenen dosyanın adını bildir
            await notifyBackend(fileName);

            setStatus("✅ Dosya başarıyla yüklendi.");
        } catch (err) {
            console.error(err);
            setStatus("❌ Hata: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return { uploadAndNotify, loading, status };
};