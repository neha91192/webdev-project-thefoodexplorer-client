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


  constructor(private service: ZomatoApiServiceClient, private router: Router) {
    this.locationId = 289;
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
        console.log(this.cuisineData);
      });

  }



  search(cusineId) {
    this.router.navigate(['/search'], { queryParams: { cuisine: cusineId},
      queryParamsHandling: 'merge' });

  }

  ngOnInit() {
  }

}
