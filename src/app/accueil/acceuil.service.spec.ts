import { TestBed, inject } from '@angular/core/testing';

import { AcceuilService } from './acceuil.service';

describe('AcceuilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcceuilService]
    });
  });

  it('should be created', inject([AcceuilService], (service: AcceuilService) => {
    expect(service).toBeTruthy();
  }));
});
