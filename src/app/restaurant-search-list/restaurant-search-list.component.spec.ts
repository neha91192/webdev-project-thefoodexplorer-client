import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchListComponent } from './restaurant-search-list.component';

describe('RestaurantSearchListComponent', () => {
  let component: RestaurantSearchListComponent;
  let fixture: ComponentFixture<RestaurantSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
