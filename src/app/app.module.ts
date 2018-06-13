import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeSearchPanelComponent } from './home-search-panel/home-search-panel.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantCategorySearchPanelComponent } from './restaurant-category-search-panel/restaurant-category-search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeSearchPanelComponent,
    RestaurantSearchComponent,
    RestaurantCategorySearchPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
