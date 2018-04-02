import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpModule ],
      providers: [ HttpServiceService ]
    });

    service = TestBed.get(HttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTopAlbum(artist) should be defined', async(() => {
    expect(service.getTopAlbum).toBeDefined();
  }));

  it('getSimilarArtists(artist) should be defined', async(() => {
    expect(service.getSimilarArtists).toBeDefined();
  }));

  it('getArtistInfo(artist) should be defined', async(() => {
    expect(service.getArtistInfo).toBeDefined();
  }));

  it('findArtists(query) should be defined', async(() => {
    expect(service.findArtists).toBeDefined();
  }));
});
