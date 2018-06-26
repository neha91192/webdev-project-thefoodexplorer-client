import { Component, OnInit } from '@angular/core';
import {OwnerServiceClient} from '../services/owner-service-client';

@Component({
  selector: 'app-admin-owner-restaurants',
  templateUrl: './admin-owner-restaurants.component.html',
  styleUrls: ['./admin-owner-restaurants.component.css']
})
export class AdminOwnerRestaurantsComponent implements OnInit {

  constructor(private ownerService: OwnerServiceClient) { }

  owners = []
  ngOnInit() {
    this.findAllOwners();
  }

  findAllOwners() {
    this.ownerService.findAllOwners()
      .then((response) => {
        this.owners = response;
        console.log('all owners:', response);
      });
  }

  deleteOwner(ownerId) {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.ownerService
        .deleteOwner(ownerId)
        .then((response) => {
          console.log('delete user:', response);
          alert('Owner deleted successfully!');
        });
        // .then(() => this.findAllOwners());
    }
  }

}
