import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchFiltersComponent } from './restaurant-search-filters.component';

describe('RestaurantSearchFiltersComponent', () => {
  let component: RestaurantSearchFiltersComponent;
  let fixture: ComponentFixture<RestaurantSearchFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSearchFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
