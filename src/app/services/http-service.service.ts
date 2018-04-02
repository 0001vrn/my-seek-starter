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
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}&method=artist.gettopalbums&artist=${artist}`)
              .map( data => data.json())
              .subscribe(
                data => {
                  if(data && data.topalbums && data.topalbums.album)
                    resolve(data.topalbums.album);
                  else
                    reject({ message: 'No top albums available'})
                },
                error => {
                  reject({ message : error }); 
                }
              ); 
    });
  }

  getSimilarArtists(artist){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}&method=artist.similarartists&artist=${artist}`)
              .map( data => data.json())
              .subscribe(
                data => {
                  if(data && data.similarartists && data.similarartists.album)
                    resolve(data.similarartists.album);
                  else
                    reject({ message: 'No similar artists available'})
                },
                error => {
                  reject({ message : error }); 
                }
              ); 
    });
  }
  

  getArtistInfo(artist){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}&method=artist.getinfo&artist=${artist}`)
              .map( data => data.json())
              .subscribe(
                data => {
                  if(data && data.artist)
                    resolve(data.artist);
                  else
                    reject({ message: 'No artist info available'})
                },
                error => {
                  reject({ message : error }); 
                }
              ); 
    });
  }

  findArtists(query){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}&method=artist.search&artist=${query}`)
              .map( data => data.json())
              .subscribe(
                data => {
                  if(data && data.results && data.results.artistmatches)
                    resolve(data.results.artistmatches);
                  else
                    reject({ message: 'No artists match that query'})
                },
                error => {
                  reject({ message : error }); 
                }
              ); 
    });
  }
}
