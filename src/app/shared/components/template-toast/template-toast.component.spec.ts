import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateToastComponent} from './template-toast.component';

describe('CredixToastComponent', () => {
  let component: TemplateToastComponent;
  let fixture: ComponentFixture<TemplateToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateToastComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
     expect(component).toBeTruthy();
   });*/
});
