import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  
  
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
    // return  this.http.get(`${this.baseUrl}&method=artist.search&artist=${query}`)
    //                   .toPromise()
    //                   .then((response) => {
    //                       response.json();
    //                   }); 
    return new Promise((resolve, reject) => {
        this.http.get(`${this.baseUrl}&method=artist.search&artist=${query}`)
            .map(data => data.json())
            .subscribe(
                data => {
                    if (data && data.results && data.results.artistmatches) {
                        resolve(data.results.artistmatches);
                    } else {
                        reject({ message: 'No artists match that query.'});
                    }
                },
                error => {
                    reject({ message: error });
                }
            );
    });
    
    }
}
export class MockHttpService {
    getTopAlbums() {
        return new Promise((resolve, reject) => {
            resolve([]);
        })
    }
    getSimilarArtists() {
        return new Promise((resolve, reject) => {
            resolve([]);
        })
    }
    getArtistInfo() {
        return new Promise((resolve, reject) => {
            resolve([]);
        })
    }
    findArtists() {
        return new Promise((resolve, reject) => {
            resolve([]);
        })
    }
}