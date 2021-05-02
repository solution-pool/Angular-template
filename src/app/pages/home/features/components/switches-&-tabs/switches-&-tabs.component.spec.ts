import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SwitchesTabsComponent} from './switches-&-tabs.component';

describe('MovementsStateAccountComponent', () => {
  let component: SwitchesTabsComponent;
  let fixture: ComponentFixture<SwitchesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchesTabsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
