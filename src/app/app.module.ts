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
import { SocialLoginComponent } from './social-login/social-login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {RegistrationServiceClient} from './services/registration-service-client';
import {LoginServiceClient} from './services/login-service-client';
import {RegistrationComponent} from './registration/registration.component';
import {SharedService} from './services/shared-service-client';
import { ProfileContentsComponent } from './profile-contents/profile-contents.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileReviewsComponent } from './profile-reviews/profile-reviews.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './profile-following/profile-following.component';
import { ProfileInterestsComponent } from './profile-interests/profile-interests.component';
import {ProfileServiceClient} from './services/profile-service-client';
import { RestaurantDetailsPageComponent } from './restaurant-details-page/restaurant-details-page.component';
import { UpdateProfileProfileTabComponent } from './update-profile-profile-tab/update-profile-profile-tab.component';
import { UpdateProfilePasswordTabComponent } from './update-profile-password-tab/update-profile-password-tab.component';
import { UpdateProfileEmailTabComponent } from './update-profile-email-tab/update-profile-email-tab.component';
import { UpdateProfileLocationsTabComponent } from './update-profile-locations-tab/update-profile-locations-tab.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { RestaurantInformationComponent } from './restaurant-information/restaurant-information.component';
import { CustomerServiceClient } from './services/customer-service-client';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import {UploadService} from './api-services/upload-s3-service';
import {MediaServiceClient} from './services/media-service.client';
import {PaginationModule} from 'ngx-pagination-bootstrap';
import {OwnerServiceClient} from './services/owner-service-client';

import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angular5-social-login';
import { ProfileDiscoverPeopleComponent } from './profile-discover-people/profile-discover-people.component';
import { AdminComponent } from './admin/admin.component';
import {UserServiceClient} from './services/user-service-client';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('2013205002267162')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1054791685814-o4dtghh2uq8dspupulebnula3kgtvg5o.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}


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
    SocialLoginComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    RegistrationComponent,
    UpdateProfileComponent,
    UpdateProfileComponent,
    ProfileContentsComponent,
    ProfileOverviewComponent,
    ProfileReviewsComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    ProfileInterestsComponent,
    RestaurantDetailsPageComponent,
    UpdateProfileProfileTabComponent,
    UpdateProfilePasswordTabComponent,
    UpdateProfileEmailTabComponent,
    UpdateProfileLocationsTabComponent,
    ReviewListComponent,
    RestaurantInformationComponent,
    RestaurantMenuComponent,
    OwnerSignupComponent,
    ProfileDiscoverPeopleComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routing,
    PaginationModule,
    SocialLoginModule
  ],
  providers: [
    ZomatoApiServiceClient,
    RegistrationServiceClient,
    LoginServiceClient,
    SharedService,
    ProfileServiceClient,
    CustomerServiceClient,
    UploadService,
    MediaServiceClient,
    OwnerServiceClient,
    UserServiceClient,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})



export class AppModule { }

