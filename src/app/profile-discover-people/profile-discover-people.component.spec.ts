import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDiscoverPeopleComponent } from './profile-discover-people.component';

describe('ProfileDiscoverPeopleComponent', () => {
  let component: ProfileDiscoverPeopleComponent;
  let fixture: ComponentFixture<ProfileDiscoverPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDiscoverPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDiscoverPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
