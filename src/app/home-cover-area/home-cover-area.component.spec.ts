import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoverAreaComponent } from './home-cover-area.component';

describe('HomeCoverAreaComponent', () => {
  let component: HomeCoverAreaComponent;
  let fixture: ComponentFixture<HomeCoverAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCoverAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoverAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
