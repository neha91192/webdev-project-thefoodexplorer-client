import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UploadService} from '../api-services/upload-s3-service';
import {Media} from '../models/media.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {MediaServiceClient} from '../services/media-service.client';
import {OwnerServiceClient} from '../services/owner-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit, OnChanges {
  @Input() restaurant: Restaurant;
  @Input() isOwner: boolean;
  @Input() user: User;
  fileToUpload: File = null;
  data;
  uploadedImage;
  restaurantId;
  restaurantData;
  media: Media;
  mediaList: Media[] = [];
  showUpload;

  constructor(private uploadService: UploadService, private mediaService: MediaServiceClient,
              private ownerService: OwnerServiceClient) {
    if (this.restaurant !== undefined) {
      this.restaurantId = this.restaurant.id;
      this.fetchMediaForRestaurant(this.restaurantId);
    }
    this.showUpload = false;
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
      this.media.restaurant.name = this.restaurantData.name;
      this.media.restaurant.locationArea = this.restaurantData.locationArea;
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
    this.mediaService.saveMedia(media).then(() => {
      alert('image added successfully');
      this.fetchMediaForRestaurant(this.restaurantId);
    });
  }



  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['restaurant'] !== 'undefined') {
      this.restaurantId = this.restaurant.id;
      this.restaurantData = this.restaurant;
      this.fetchMediaForRestaurant(this.restaurantId);


      if (typeof changes['user'] !== 'undefined') {
        this.ownerService.findOwner(this.user.userId)
          .then((user) => {
            if (this.isOwner === true) {
              if (user.restaurant.restaurantId === +this.restaurantId) {
                this.showUpload = true;
                console.log(this.showUpload);
              }
            }});
      }
    }

  }

  deleteMedia(mediaId) {
    this.mediaService.deleteMedia(mediaId).then(() => {
      alert('Deleted successfully');
      this.fetchMediaForRestaurant(this.restaurantId);
    });

  }
}
