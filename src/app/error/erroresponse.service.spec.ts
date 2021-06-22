import { TestBed } from '@angular/core/testing';

import { ErroresponseService } from './erroresponse.service';

describe('ErroresponseService', () => {
  let service: ErroresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
