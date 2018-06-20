import { Routes, RouterModule } from '@angular/router';
import {RestaurantSearchComponent} from './restaurant-search/restaurant-search.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ProfileOverviewComponent} from './profile-overview/profile-overview.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: RestaurantSearchComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/update', component: UpdateProfileComponent}


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
