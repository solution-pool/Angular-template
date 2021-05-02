import {TestBed} from '@angular/core/testing';
import {TemplateToastService} from './template-toast.service';

describe('CredixToastService', () => {
  let service: TemplateToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateToastService);
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
