import { Component, OnInit } from '@angular/core';
import {UploadService} from '../api-services/upload-s3-service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  fileToUpload: File = null;
  data;
  uploadedImage;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }

  uploadFile() {
    this.data = this.uploadService.uploadFile(this.fileToUpload);
    this.uploadedImage = this.data.Location;
    console.log(this.data.Location);
  }

}
