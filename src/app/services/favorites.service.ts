import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class FavoritesService implements OnInit {

  storageKey = 'favoritesService';
  isLocalStorageEnabled;
  favorites = [];
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
  
  ngOnInit() {
    this.favorites = this.getFavoritesFromStorage();
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

  getFavorites(){
    return this.favorites;
  }

  addFavorite(favorite) {
    if(favorite){
      let currentFavorites = this.getFavorites();
      currentFavorites.push(favorite);
      if(this.isLocalStorageEnabled){
        localStorage.setItem(this.storageKey, JSON.stringify(currentFavorites));
      }
      this.favorites = currentFavorites;
    }
  }
  removeFavorite(id) {
    if(this.favorites){
      let favoriteIdx = this.favorites.findIndex(x => x.id == id);
      this.favorites.splice(favoriteIdx, 1);
      if(this.isLocalStorageEnabled){
        localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
      }
    }
  }
  isFavorite(id) {
    return this.favorites.some(x => {
        return x.id == id;
      });
  }
}
