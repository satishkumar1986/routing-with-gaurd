import { TestBed } from '@angular/core/testing';

import { CanChildGuard } from './can-child.guard';

describe('CanChildGuard', () => {
  let guard: CanChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
