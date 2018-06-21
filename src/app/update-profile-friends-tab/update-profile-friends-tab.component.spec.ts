import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileFriendsTabComponent } from './update-profile-friends-tab.component';

describe('UpdateProfileFriendsTabComponent', () => {
  let component: UpdateProfileFriendsTabComponent;
  let fixture: ComponentFixture<UpdateProfileFriendsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileFriendsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileFriendsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
