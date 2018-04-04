import { async, inject, TestBed, withModule } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    Http,
    XHRBackend,
    Response, ResponseOptions
} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';

import { HttpServiceService, MockHttpService } from './http-service.service';

describe('HttpServiceService', () => {
  let backend: MockBackend;
  let service: HttpServiceService;
  let mockService: MockHttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpModule ],
      providers: [ HttpServiceService, MockHttpService,
        { provide: XHRBackend, useClass: MockBackend } ]
    });
    backend = TestBed.get(XHRBackend);
    service = TestBed.get(HttpServiceService);
    mockService = TestBed.get(MockHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('can instantiate service when inject service', () => {
    expect(service instanceof HttpServiceService).toBe(true);
  });

  it('can provide the mockBackend as XHRBackend',() => {
        expect(backend).not.toBeNull('backend should be provided');
  });

  it('getTopAlbum(artist) should be defined and return error message', () => {
    expect(service.getTopAlbum).toBeDefined();
    //let result = { result: "No top albums available" };
    //let response = new Response(new ResponseOptions({ status: 200, body: result }));
    //backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    service.getTopAlbum(null).then(res => {
        expect(res).toBeNull();
    });
  });

  it('getSimilarArtists(artist) should be defined', () => {
    expect(service.getSimilarArtists).toBeDefined();
    service.getSimilarArtists(null).then(res => {
      expect(res).toBeNull();
  });
  });

  it('getArtistInfo(artist) should be defined', () => {
    expect(service.getArtistInfo).toBeDefined();
  });

  it('findArtists(query) should be defined', () => {
    expect(service.findArtists).toBeDefined();
  });
});
