import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilePasswordTabComponent } from './update-profile-password-tab.component';

describe('UpdateProfilePasswordTabComponent', () => {
  let component: UpdateProfilePasswordTabComponent;
  let fixture: ComponentFixture<UpdateProfilePasswordTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfilePasswordTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilePasswordTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
