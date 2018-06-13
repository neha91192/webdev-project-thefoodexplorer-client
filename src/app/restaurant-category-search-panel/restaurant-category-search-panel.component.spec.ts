import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategorySearchPanelComponent } from './restaurant-category-search-panel.component';

describe('RestaurantCategorySearchPanelComponent', () => {
  let component: RestaurantCategorySearchPanelComponent;
  let fixture: ComponentFixture<RestaurantCategorySearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCategorySearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCategorySearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
