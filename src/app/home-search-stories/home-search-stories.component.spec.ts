import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchStoriesComponent } from './home-search-stories.component';

describe('HomeSearchStoriesComponent', () => {
  let component: HomeSearchStoriesComponent;
  let fixture: ComponentFixture<HomeSearchStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
