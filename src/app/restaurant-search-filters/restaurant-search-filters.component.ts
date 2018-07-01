import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';

@Component({
  selector: 'app-restaurant-search-filters',
  templateUrl: './restaurant-search-filters.component.html',
  styleUrls: ['./restaurant-search-filters.component.css']
})
export class RestaurantSearchFiltersComponent implements OnInit {

  categories = [];
  cost = false;
  // searchValue;
  // selectedCategory: String = 'Categories';
  isAllSort;
  ratingActive;
  costAsc;
  costDes;

  isAllCategory;
  dineIn;
  delivery;
  drinks;
  takeout;

  isAllCuisine;
  asian;
  american;
  bakery;
  breakfast;
  cafe;
  chinese;
  deserts;
  fastfood;
  french;
  fusion;
  indian;
  italian;
  mexican;



  constructor(private service: ZomatoApiServiceClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  searchCategoryDineIn() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['categoryId'] = 3;
    this.isAllCategory = false;
    this.dineIn = true;
    this.delivery = false;
    this.drinks = false;
    this.takeout =  false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  searchCategoryDelivery() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['categoryId'] = 1;

    this.isAllCategory = false;
    this.dineIn = false;
    this.delivery = true;
    this.drinks = false;
    this.takeout =  false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCategoryTakeout() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['categoryId'] = 5;

    this.isAllCategory = false;
    this.dineIn = false;
    this.delivery = false;
    this.drinks = false;
    this.takeout =  true;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCategoryDrinks() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['categoryId'] = 11;

    this.isAllCategory = false;
    this.dineIn = false;
    this.delivery = false;
    this.drinks = true;
    this.takeout =  false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  searchCuisineFastFood() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 40;

    this.isAllCuisine = false;
    this.dineIn = false;
    this.delivery = false;
    this.drinks = false;
    this.takeout =  true;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineAmerican() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 1;

    this.isAllCuisine = false;
    this.asian = false;
    this.american  = true;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineAsian() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 3;
    this.isAllCuisine = false;
    this.asian = true;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineBakery() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 5;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = true;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineBreakfast() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 182;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = true;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineCafe() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 30;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = true;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineChinese() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 25;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = true;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineDeserts() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 100;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = true;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisinefastFood() {

    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 40;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = true;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  cuisineFrench() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 45;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = true;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineFusion() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 274;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = true;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineIndian() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 148;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = true;
    this.italian  = false;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineItalian() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 55;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = true;
    this.mexican  = false;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  cuisineMexican() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['cuisine'] = 73;
    this.isAllCuisine = false;
    this.asian = false;
    this.american  = false;
    this.bakery  = false;
    this.breakfast  = false;
    this.cafe  = false;
    this.chinese  = false;
    this.deserts  = false;
    this.fastfood  = false;
    this.french  = false;
    this.fusion  = false;
    this.indian  = false;
    this.italian  = false;
    this.mexican  = true;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }
  sortByCost() {
    this.cost = true;
  }

  sortByCostAsc() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['sort'] = 'cost';
    queryParams['order'] = 'asc';
    this.isAllSort = false;
    this.ratingActive = false;
    this.costAsc = true;
    this.costDes = false;


    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  sortByCostDesc() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['sort'] = 'cost';
    queryParams['order'] = 'desc';
    this.isAllSort = false;
    this.ratingActive = false;
    this.costAsc = false;
    this.costDes = true;

    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  sortByRating() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['sort'] = 'rating';
    this.isAllSort = false;
    this.ratingActive = true;
    this.costAsc = false;
    this.costDes = false;


    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});
  }

  removeCostFilter() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    if (!this.isAllSort) {
      queryParams['sort'] = '';
      queryParams['order'] = '';
      this.isAllSort = true;
      this.ratingActive = false;
      this.costAsc = false;
      this.costDes = false;
    }
    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  removeCategoryFilter() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    if (!this.isAllCategory) {
      queryParams['categoryId'] = '';
      this.isAllCategory = true;
      this.dineIn = false;
      this.delivery = false;
      this.drinks = false;
      this.takeout =  false;
    }
    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }

  removeCuisineFilter() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    if (!this.isAllCuisine) {
      queryParams['cuisine'] = '';
      this.isAllCuisine = true;
      this.asian = false;
      this.american  = false;
      this.bakery  = false;
      this.breakfast  = false;
      this.cafe  = false;
      this.chinese  = false;
      this.deserts  = false;
      this.fastfood  = false;
      this.french  = false;
      this.fusion  = false;
      this.indian  = false;
      this.italian  = false;
      this.mexican  = false;
    }
    this.router.navigate(['/search'], {relativeTo: this.activatedRoute,
      queryParams: queryParams});

  }




}
