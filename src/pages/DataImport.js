import React, { useState } from 'react';


const ExcelUploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploadStatus('');
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        // Simüle edilmiş bir yükleme işlemi
        setTimeout(() => {
            setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);
            setSelectedFile(null); // Yükleme sonrası dosyayı sıfırla
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h4>Upload Excel File</h4>
                </div>
                <div className="card-body">
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select an Excel File</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".xlsx, .xls"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={handleUpload}
                            disabled={!selectedFile}
                        >
                            Upload
                        </Button>
                    </Form>
                    {uploadStatus && (
                        <div className={`mt-3 alert ${uploadStatus.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                            {uploadStatus}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExcelUploadPage;