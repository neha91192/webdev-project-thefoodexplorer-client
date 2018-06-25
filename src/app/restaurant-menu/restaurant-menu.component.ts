import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UploadService} from '../api-services/upload-s3-service';
import {Media} from '../models/media.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {MediaServiceClient} from '../services/media-service.client';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit, OnChanges {
  @Input() restaurant: Restaurant;
  @Input() isOwner: boolean;
  fileToUpload: File = null;
  data;
  uploadedImage;
  restaurantId;
  media: Media;
  mediaList: Media[] = [];
  showUpload;

  constructor(private uploadService: UploadService, private mediaService: MediaServiceClient) {
    if (this.restaurant !== undefined) {
      this.restaurantId = this.restaurant.id;
      this.fetchMediaForRestaurant(this.restaurantId);
    }
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }

  uploadFile() {
    this.uploadService.uploadFile(this.fileToUpload).then(data => {
      this.data = data;
      this.uploadedImage = this.data.Location;
      this.media = new Media();
      this.media.src = this.uploadedImage;
      this.media.imageType = 'Menu';
      this.media.imageOrder = this.mediaList.length + 1;
      this.media.restaurant = new Restaurant();
      console.log(this.restaurantId);
      this.media.restaurant.id = this.restaurantId;
      this.saveMedia(this.media);

    }).catch(err => console.log(err));
    if (this.data !== undefined) {

    }
  }

  fetchMediaForRestaurant(restaurantId) {
    this.mediaService.findMediaForRestaurant(restaurantId)
      .then(mediaList => this.mediaList = mediaList);
  }

  saveMedia(media) {
    this.mediaService.saveMedia(media).then(() => alert('image added successfully'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['restaurant'] !== 'undefined') {
      this.restaurantId = this.restaurant.id;
      console.log(this.restaurantId);
      this.fetchMediaForRestaurant(this.restaurantId);
      if (this.isOwner === true) {
        this.showUpload = this.isOwner;
      }
    }

  }
}
