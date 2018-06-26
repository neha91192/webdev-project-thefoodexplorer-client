import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-quick-search',
  templateUrl: './home-quick-search.component.html',
  styleUrls: ['./home-quick-search.component.css']
})
export class HomeQuickSearchComponent implements OnInit {

  locationId;
  popularCuisines = [];
  cuisineData = [];
  cuisines = [];

  imageMap = [];


  constructor(private service: ZomatoApiServiceClient, private router: Router) {
    this.locationId = 289;

      this.imageMap = [
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/460599/pexels-photo-460599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/5506/bread-food-salad-sandwich.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'];
      this.fetchPopularCuisinesForCity();


  }

  fetchPopularCuisinesForCity() {
      this.service.fetchPopularityForCity(this.locationId)
        .then(cuisines => {
          this.popularCuisines = cuisines.top_cuisines;
          this.fetchCuisineData();
         });

  }

  fetchCuisineData() {
    this.service.fetchPopularCuisines(this.locationId).then(
      cuisines => {
        const keys = Object.keys(cuisines.cuisines);
        for (let i = 0; i < keys.length; i++) {
          const index = this.popularCuisines.indexOf(cuisines.cuisines[i].cuisine.cuisine_name);
          if (index > -1) {
            this.cuisineData.push({id: cuisines.cuisines[i].cuisine.cuisine_id, name: this.popularCuisines[index]});
          }
        }
      });

  }



  search(cusineId) {
    this.router.navigate(['/search'], { queryParams: { cuisine: cusineId},
      queryParamsHandling: 'merge' });

  }

  ngOnInit() {
  }

}
