import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

const bucketName = 'businessgo-web';
const userFilesFolder = 'user_files';

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export const s3 = new AWS.S3({
  params: { Bucket: bucketName, ACL: 'public-read' }
});

export const uploadFile = async (file, onProgress = () => {}) => {
  const extension = file.name.substr(file.name.indexOf('.') + 1);
  const fileName = `${uuid()}.${extension}`;
  const response = await s3
    .putObject({ Body: file, Key: `${userFilesFolder}/${fileName}` })
    .on('httpUploadProgress', evt => {
      onProgress((evt.loaded / evt.total) * 100);
    })
    .promise();

  return {
    url: `https://${bucketName}.s3.amazonaws.com/${userFilesFolder}/${fileName}`
  };
};
