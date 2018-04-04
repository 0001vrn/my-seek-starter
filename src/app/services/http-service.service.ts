import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {
  
  
  baseUrl:string;

  constructor(private http: Http) {
    const API_KEY = 'c144c6f9f1ab5fa13b6346f94dacac71';
    this.baseUrl = `http://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`;
   }

  getTopAlbum(artist){
    return this.http.get(`${this.baseUrl}&method=artist.gettopalbums&artist=${artist}`)
                    .toPromise()
                    .then((response) => {
                        response.json();
                    }); 
  }

  getSimilarArtists(artist){
    return this.http.get(`${this.baseUrl}&method=artist.similarartists&artist=${artist}`)
                    .toPromise()
                    .then((response) => {
                        response.json();
                    }); 
  }
  

  getArtistInfo(artist){
    return this.http.get(`${this.baseUrl}&method=artist.getinfo&artist=${artist}`)
                    .toPromise()
                    .then((response) => {
                        response.json();
                    }); 
              
  }

  findArtists(query){
    return  this.http.get(`${this.baseUrl}&method=artist.search&artist=${query}`)
                      .toPromise()
                      .then((response) => {
                          response.json();
                      }); 

  }
}
export class MockHttpService {
  getTopAlbums() {
      return [];
  }
  getSimilarArtists() {
      return [];
  }
  getArtistInfo() {
      return [];
  }
  findArtists() {
      return [];
  }
}