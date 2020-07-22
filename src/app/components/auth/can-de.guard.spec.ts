import { TestBed } from '@angular/core/testing';

import { CanDeGuard } from './can-de.guard';

describe('CanDeGuard', () => {
  let guard: CanDeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
