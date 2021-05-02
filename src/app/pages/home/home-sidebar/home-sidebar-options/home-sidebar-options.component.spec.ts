import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeSidebarOptionsComponent} from './home-sidebar-options.component';

describe('HomeSidebarOptionComponent', () => {
  let component: HomeSidebarOptionsComponent;
  let fixture: ComponentFixture<HomeSidebarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSidebarOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSidebarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
