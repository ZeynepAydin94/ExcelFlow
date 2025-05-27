// src/services/s3Service.js
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
});

const s3 = new AWS.S3();

export const uploadToS3 = (file) => {
    const params = {
        Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
        Key: `${Date.now()}_${file.name}`,
        Body: file,
        ContentType: file.type,
        ACL: "private", // veya test için "public-read"
    };

    return s3.upload(params).promise(); // async/await kullanabilirsin
};