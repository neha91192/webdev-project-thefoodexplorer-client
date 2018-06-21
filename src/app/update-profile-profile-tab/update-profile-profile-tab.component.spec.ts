import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileProfileTabComponent } from './update-profile-profile-tab.component';

describe('UpdateProfileProfileTabComponent', () => {
  let component: UpdateProfileProfileTabComponent;
  let fixture: ComponentFixture<UpdateProfileProfileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileProfileTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
