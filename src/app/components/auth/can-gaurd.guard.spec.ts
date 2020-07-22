import { TestBed } from '@angular/core/testing';

import { CanGaurdGuard } from './can-gaurd.guard';

describe('CanGaurdGuard', () => {
  let guard: CanGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
