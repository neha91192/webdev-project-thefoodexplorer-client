import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileLocationsTabComponent } from './update-profile-locations-tab.component';

describe('UpdateProfileLocationsTabComponent', () => {
  let component: UpdateProfileLocationsTabComponent;
  let fixture: ComponentFixture<UpdateProfileLocationsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileLocationsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileLocationsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
