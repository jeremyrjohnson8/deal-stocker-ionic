/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockpileService } from './stockpile.service';

describe('Service: Stockpile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockpileService]
    });
  });

  it('should ...', inject([StockpileService], (service: StockpileService) => {
    expect(service).toBeTruthy();
  }));
});
