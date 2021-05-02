import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateConfirmationModalComponent} from './template-confirmation-modal.component';

describe('CredixPopupComponent', () => {
  let component: TemplateConfirmationModalComponent;
  let fixture: ComponentFixture<TemplateConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateConfirmationModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
