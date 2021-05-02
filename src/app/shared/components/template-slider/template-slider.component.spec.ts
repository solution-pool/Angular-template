import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateSliderComponent} from './template-slider.component';

describe('CredixSliderComponent', () => {
  let component: TemplateSliderComponent;
  let fixture: ComponentFixture<TemplateSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
