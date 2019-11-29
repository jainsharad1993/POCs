import { TestBed, inject } from '@angular/core/testing';

import { Homeservice } from './home.service';

describe('Homeservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Homeservice]
    });
  });

  it('should be created', inject([Homeservice], (service: Homeservice) => {
    expect(service).toBeTruthy();
  }));
});
