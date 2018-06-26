import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOwnerRestaurantsComponent } from './admin-owner-restaurants.component';

describe('AdminOwnerRestaurantsComponent', () => {
  let component: AdminOwnerRestaurantsComponent;
  let fixture: ComponentFixture<AdminOwnerRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOwnerRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOwnerRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
