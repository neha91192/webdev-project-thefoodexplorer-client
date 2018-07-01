import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';


@Component({
  selector: 'app-restaurant-search-list',
  templateUrl: './restaurant-search-list.component.html',
  styleUrls: ['./restaurant-search-list.component.css']
})
export class RestaurantSearchListComponent implements OnInit {

  category;
  location;
  locationId;
  searchKeyword;
  cuisine;
  entity_type;
  sort;
  order;
  cityName;
  countryFlag;
  isLoaded;
  start: number;
  isNext;
  isPrevious;
  count;
  disableNext;
  disablePrevious;

  restaurants = [];

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute,
              private router: Router) {
    // this.route.params.subscribe(params => this.setParams(params));
    this.category = '';
    this.searchKeyword = '';
    this.location = '';
    this.entity_type = 'city';
    this.count = 20;
    this.disableNext = false;
    this.disablePrevious = false;
    this.route.queryParams.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.location = params['locationId'];
    this.searchKeyword = params['value'];
    this.category = params['categoryId'];

    if (params['locationId'] !== undefined) {
      this.location = params['locationId'];
    } else {
      this.location = '';
    }

    if (params['categoryId'] !== undefined) {
      this.category = params['categoryId'];
    } else {
      this.category = '';
    }

    if (params['value'] !== undefined) {
      this.searchKeyword = params['value'];
    } else {
      this.searchKeyword = '';
    }

    if (params['cuisine'] !== undefined) {
      this.cuisine = params['cuisine'];
    } else {
      this.cuisine = '';
    }

    if (params['sort'] !== undefined) {
      this.sort = params['sort'];
    } else {
      this.sort = '';
    }
    if (params['order'] !== undefined) {
      this.order = params['order'];
    } else {
      this.order = '';
    }

    if (params['start'] !== undefined) {
      this.start = params['start'];
      if (+this.start === 0) {
        this.disablePrevious = true;
      }
    } else {
      this.start = 0;
      this.disablePrevious = true;
    }
    this.fetchLocationIdFromAPI(this.location);
    this.loadRestaurants(this.location, this.searchKeyword, this.category, this.cuisine, this.sort, this.order, this.start);
  }

  loadRestaurants(location, searchKeyword, category, cuisine, sort, order, start) {

    this.location = location;
    this.searchKeyword = decodeURI(searchKeyword);
    this.category = category;
    this.cuisine = cuisine;
    this.sort = sort;
    this.order = order;
    this.start = start;


    this.zomatoService.findRestaurants(this.entity_type, location, searchKeyword, category, cuisine, sort, order, start, this.count)
      .then(response => {
        this.restaurants = response.restaurants;
        this.isLoaded = true;
      });

  }

  fetchLocationIdFromAPI(location) {
     this.zomatoService.fetchLocation(location, '')
      .then(locationDetails => {
        console.log(locationDetails);
        this.cityName = locationDetails.location_suggestions[0].name;
        this.countryFlag = locationDetails.location_suggestions[0].country_flag_url;
      });
  }
  ngOnInit() {

    this.category = '';
    this.searchKeyword = '';
    this.cuisine = '';
    this.location = '';
    this.sort = '';
    this.order = '';
  }

  fetchPrevious() {
    this.start = +this.start - this.count;
    if (+this.start === 0) {
      this.disablePrevious = true;
      this.disableNext = false;
    }
    const queryParams = Object.assign({}, this.route.snapshot.queryParams);
    queryParams['start'] = this.start;
    this.router.navigate(['/search'], {relativeTo: this.route,
      queryParams: queryParams});
  }
  fetchNext() {
    this.start = +this.start + this.count;
    if (+this.start === 80) {
      this.disableNext = true;
      this.disablePrevious = false;
    }
    const queryParams = Object.assign({}, this.route.snapshot.queryParams);
    queryParams['start'] = this.start;
    this.router.navigate(['/search'], {relativeTo: this.route,
      queryParams: queryParams});
  }


}
