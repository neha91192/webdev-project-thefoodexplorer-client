import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    MainSearchPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

