import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadService {

  IMAGE_FOLDER = 'image/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAJBUYT7W5JG73ZN3A',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'thefoodexplorer',
      Key: this.IMAGE_FOLDER + file.name,
      Body: file
    };

    return bucket.upload(params, function (err, data) {
      if (err) {
        console.log('Error uploading file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return data;
    });
  }

}
