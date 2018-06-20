import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeCoverAreaComponent } from './home-cover-area/home-cover-area.component';
import { OffersComponent } from './offers/offers.component';

import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { HomeQuickSearchComponent } from './home-quick-search/home-quick-search.component';
import { HomeSearchStoriesComponent } from './home-search-stories/home-search-stories.component';
import { FooterComponent } from './footer/footer.component';
import { MainSearchPanelComponent } from './main-search-panel/main-search-panel.component';
import { RestaurantSearchFiltersComponent } from './restaurant-search-filters/restaurant-search-filters.component';
import { RestaurantSearchAdsComponent } from './restaurant-search-ads/restaurant-search-ads.component';
import { RestaurantSearchListComponent } from './restaurant-search-list/restaurant-search-list.component';
import {ZomatoApiServiceClient} from './api-services/zomato-api-service-client';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {RegistrationServiceClient} from './services/registration-service-client';
import {LoginServiceClient} from './services/login-service-client';
import {RegistrationComponent} from './registration/registration.component';
import {SharedService} from './services/shared-service-client';
import {ProfileComponent} from './profile/profile.component';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import { ProfileContentsComponent } from './profile-contents/profile-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeCoverAreaComponent,
    OffersComponent,
    RestaurantSearchComponent,
    RestaurantSearchComponent,
    HomeQuickSearchComponent,
    HomeSearchStoriesComponent,
    FooterComponent,
    MainSearchPanelComponent,
    RestaurantSearchFiltersComponent,
    RestaurantSearchAdsComponent,
    RestaurantSearchListComponent,
    LoginComponent,
    LoginFormComponent,
    FacebookLoginComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    RegistrationComponent,
    UpdateProfileComponent,
    UpdateProfileComponent,
    ProfileContentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    ZomatoApiServiceClient,
    RegistrationServiceClient,
    LoginServiceClient,
    SharedService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

