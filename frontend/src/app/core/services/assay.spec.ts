import { TestBed } from '@angular/core/testing';

import { Assay } from './assay';

describe('Assay', () => {
  let service: Assay;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assay);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
