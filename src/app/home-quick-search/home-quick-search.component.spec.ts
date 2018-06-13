import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuickSearchComponent } from './home-quick-search.component';

describe('HomeQuickSearchComponent', () => {
  let component: HomeQuickSearchComponent;
  let fixture: ComponentFixture<HomeQuickSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuickSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
