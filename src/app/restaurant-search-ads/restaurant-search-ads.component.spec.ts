import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchAdsComponent } from './restaurant-search-ads.component';

describe('RestaurantSearchAdsComponent', () => {
  let component: RestaurantSearchAdsComponent;
  let fixture: ComponentFixture<RestaurantSearchAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSearchAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
