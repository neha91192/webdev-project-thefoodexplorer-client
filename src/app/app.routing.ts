import { Routes, RouterModule } from '@angular/router';
import {RestaurantSearchComponent} from './restaurant-search/restaurant-search.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: RestaurantSearchComponent}
];
//
// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       appRoutes,
//       { enableTracing: true } // <-- debugging purposes only
//     )
//     // other imports here
//   ];
export const routing = RouterModule.forRoot(appRoutes);
