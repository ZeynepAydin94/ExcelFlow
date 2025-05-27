import React, { useState } from "react";
import { useS3Uploader } from "../../hooks/useS3Uploader";

const S3Uploader = () => {
  const [file, setFile] = useState(null);
  const { uploadAndNotify, loading, status } = useS3Uploader();

  return (
    <div className="container mt-5">
      <h4>Dosya Yükle</h4>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control mb-2" />
      <button className="btn btn-success" onClick={() => uploadAndNotify(file)} disabled={loading}>
        {loading ? "Yükleniyor..." : "Yükle"}
      </button>
      <div className="mt-3">{status}</div>
    </div>
  );
};

export default S3Uploader;