import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeSidebarHeaderComponent} from './home-sidebar-header.component';

describe('HomeSidebarHeaderComponent', () => {
  let component: HomeSidebarHeaderComponent;
  let fixture: ComponentFixture<HomeSidebarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSidebarHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
