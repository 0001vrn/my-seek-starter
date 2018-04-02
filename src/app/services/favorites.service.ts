import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  storageKey = 'favoritesService';
  isLocalStorageEnabled;

  constructor() {

    this.isLocalStorageEnabled = (() => {
      try{
        localStorage.setItem('1','1');
        localStorage.getItem('1');
        return true;
      }
      catch(err){
        return false;
      }
    });
  }
  
  getFavoritesFromStorage() {
    let localFavorites = [];
    
    if(this.isLocalStorageEnabled){
      let stringLocalFavorites = localStorage.getItem(this.storageKey);
      if(stringLocalFavorites)
        localFavorites = JSON.parse(stringLocalFavorites);
    }


    return localFavorites;
  }
}
