import { TestBed } from '@angular/core/testing';

import { MediumService } from '../service/medium.service';

describe('MediumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediumService = TestBed.get(MediumService);
    expect(service).toBeTruthy();
  });
});
