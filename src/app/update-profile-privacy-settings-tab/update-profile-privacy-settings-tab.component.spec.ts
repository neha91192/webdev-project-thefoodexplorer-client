import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilePrivacySettingsTabComponent } from './update-profile-privacy-settings-tab.component';

describe('UpdateProfilePrivacySettingsTabComponent', () => {
  let component: UpdateProfilePrivacySettingsTabComponent;
  let fixture: ComponentFixture<UpdateProfilePrivacySettingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfilePrivacySettingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilePrivacySettingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
