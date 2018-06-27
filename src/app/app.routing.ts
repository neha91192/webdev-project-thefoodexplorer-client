import { Routes, RouterModule } from '@angular/router';
import {RestaurantSearchComponent} from './restaurant-search/restaurant-search.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ProfileOverviewComponent} from './profile-overview/profile-overview.component';
import {RestaurantDetailsPageComponent} from './restaurant-details-page/restaurant-details-page.component';
import {OwnerSignupComponent} from './owner-signup/owner-signup.component';
import {AdminComponent} from './admin/admin.component';
import {UserProfile} from 'aws-sdk/clients/opsworks';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {OwnerProfileComponent} from './owner-profile/owner-profile.component';
import {AdminOwnerRestaurantsComponent} from './admin-owner-restaurants/admin-owner-restaurants.component';
import {RestaurantSearchListComponent} from './restaurant-search-list/restaurant-search-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: RestaurantSearchListComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/update', component: UpdateProfileComponent},
  { path: 'restaurant/:restaurantId', component: RestaurantDetailsPageComponent},
  { path: 'register', component: OwnerSignupComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'user/:userId', component: UserProfileComponent},
  { path: 'profile/owner', component: OwnerProfileComponent},
  { path: 'admin/owner', component: AdminOwnerRestaurantsComponent}

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
