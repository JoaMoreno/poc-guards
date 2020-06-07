import { TestBed } from '@angular/core/testing';

import { GuardControlService } from './guard-control.service';

describe('GuardControlService', () => {
  let service: GuardControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
