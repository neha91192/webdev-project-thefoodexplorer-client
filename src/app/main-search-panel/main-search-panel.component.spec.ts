import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchPanelComponent } from './main-search-panel.component';

describe('MainSearchPanelComponent', () => {
  let component: MainSearchPanelComponent;
  let fixture: ComponentFixture<MainSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
