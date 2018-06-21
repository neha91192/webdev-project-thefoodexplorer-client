import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileEmailTabComponent } from './update-profile-email-tab.component';

describe('UpdateProfileEmailTabComponent', () => {
  let component: UpdateProfileEmailTabComponent;
  let fixture: ComponentFixture<UpdateProfileEmailTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileEmailTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileEmailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
