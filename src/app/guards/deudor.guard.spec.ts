import { TestBed } from '@angular/core/testing';

import { DeudorGuard } from './deudor.guard';

describe('DeudorGuard', () => {
  let guard: DeudorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeudorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
