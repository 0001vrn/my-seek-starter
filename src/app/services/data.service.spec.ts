import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DataService ],
      imports:[ HttpModule ]
    });
  });
  beforeEach(() => {
    service = TestBed.get(DataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
