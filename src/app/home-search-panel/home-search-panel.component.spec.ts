import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchPanelComponent } from './home-search-panel.component';

describe('HomeSearchPanelComponent', () => {
  let component: HomeSearchPanelComponent;
  let fixture: ComponentFixture<HomeSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
