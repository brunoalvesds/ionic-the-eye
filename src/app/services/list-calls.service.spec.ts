import { TestBed } from '@angular/core/testing';

import { ListCallsService } from './list-calls.service';

describe('ListCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCallsService = TestBed.get(ListCallsService);
    expect(service).toBeTruthy();
  });
});
