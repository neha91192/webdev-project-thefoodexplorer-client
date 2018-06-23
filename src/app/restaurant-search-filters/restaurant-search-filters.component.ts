import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';

@Component({
  selector: 'app-restaurant-search-filters',
  templateUrl: './restaurant-search-filters.component.html',
  styleUrls: ['./restaurant-search-filters.component.css']
})
export class RestaurantSearchFiltersComponent implements OnInit {

  locations = [{id: '289', name: 'Boston'}, {id: '', name: 'Chicago'},
    {id: '', name: 'Denver'}, {id: '', name: 'New York City'}];
  categories = [];
  searchValue;
  selectedCategory: String = 'Categories';
  selectedCategoryId;
  locationValue;
  selectedLocationId;
  queryParams: ['location'] = 289;


  constructor(private service: ZomatoApiServiceClient, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  searchCategoryDineIn() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['category'] = 3;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  searchCategoryDelivery() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['category'] = 1;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCategoryTakeout() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['category'] = 5;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCategoryDrinks() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['category'] = 11;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCuisineFastFood() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 40;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineAmerican() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 1;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineAsian(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 3;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineBakery(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 5;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineBreakfast(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 182;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineCafe(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 30;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineChinese(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 25;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineDeserts(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 100;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisinefastFood(){

    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 40;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineFrench(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 45;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineFusion(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 274;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineIndian(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 148;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineItalian(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 55;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineMexican(){
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 73;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  costLessThan20() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cost'] = 20;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }


}
