import { TestBed } from '@angular/core/testing';

import { GetFoodsService } from './foods.service';

describe('GetFoodsService', () => {
  let service: GetFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
