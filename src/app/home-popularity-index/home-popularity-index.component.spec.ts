import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularityIndexComponent } from './home-popularity-index.component';

describe('HomePopularityIndexComponent', () => {
  let component: HomePopularityIndexComponent;
  let fixture: ComponentFixture<HomePopularityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopularityIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopularityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
