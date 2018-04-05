import { TestBed, inject, async } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let mockStorageFavorites: any;
  let mockFavorite: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesService]
    });

    service = TestBed.get(FavoritesService);
    mockStorageFavorites = [
      { id: 1 },
      { id: 2 }
    ];
    mockFavorite = {
      id: 1,
      name: 'Derp'
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set favorites when ngOnInit() is called', () =>{
    service.ngOnInit();
    expect(service.favorites).toBeDefined();
  });

  it('getFavoritesFromStorage() should be defined', () => {
    expect(service.getFavoritesFromStorage).toBeDefined();
  });

  it('should be defined with all of its default value', () => {
    expect(service.storageKey).toBe('favoritesService');
    expect(service.isLocalStorageEnabled).toBeTruthy();
  });

  describe('Function: getFavoritesFromStorage()', () => {
    
  
    it('should return an array of localStorage (when it\'s enabled)', () => {
      localStorage.setItem(service.storageKey, JSON.stringify(mockStorageFavorites));
  
      let favoritesFromStorageCall = service.getFavoritesFromStorage();
  
      expect(favoritesFromStorageCall.length).toBe(2);  
      expect(favoritesFromStorageCall[0].id).toBe(1);
      expect(favoritesFromStorageCall[1].id).toBe(2);
    });
  
    it('should not return an array of localStorage (when it\'s disabled)', () => {
      
      localStorage.setItem(service.storageKey, JSON.stringify(mockStorageFavorites));
      service.isLocalStorageEnabled = false;
  
      let favoritesFromStorageCall = service.getFavoritesFromStorage();
  
      expect(favoritesFromStorageCall.length).toBe(0);
    });
  });

  describe('Function: getFavorites()', () => {
    it('should be defined', () => {
      expect(service.getFavorites).toBeDefined();
      expect(service.getFavorites().length).toBe(0);
    });
  });

  describe('Function: addFavorite(favorite)', () => {
    it('should add a favorite and cache that favorite (when localStorage is enabled)', () => {
      expect(service.addFavorite).toBeDefined();
      spyOn(localStorage, 'setItem').and.callThrough();
      service.addFavorite(mockFavorite);
      
      expect(service.favorites.length).toBe(1);
      expect(service.favorites[0].id).toBe(1);
      expect(service.favorites[0].name).toBe('Derp');
      
      expect(localStorage.setItem).toHaveBeenCalledWith(service.storageKey, JSON.stringify([mockFavorite]));

      let localStorageFavorite = JSON.parse(localStorage.getItem(service.storageKey));

      expect(localStorageFavorite.length).toBe(1);
      expect(localStorageFavorite[0].id).toBe(1);
      expect(localStorageFavorite[0].name).toBe('Derp');
    });
    it('should add a favorite and not cache that favorite (when localStorage is disabled)', () => {
      expect(service.addFavorite).toBeDefined();
      spyOn(localStorage, 'setItem').and.callThrough();
      
      service.isLocalStorageEnabled = false;
      
      service.addFavorite(mockFavorite);
      
      expect(service.favorites.length).toBe(1);
      expect(service.favorites[0].id).toBe(1);
      expect(service.favorites[0].name).toBe('Derp');
      
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });
  describe('Function: removeFavorite(id)', () => {
    it('remove a favorite item from \'favorites\' and from localStorage (when enabled)', () => {
      expect(service.removeFavorite).toBeDefined();
      expect(service.addFavorite).toBeDefined();
      spyOn(localStorage, 'setItem').and.callThrough();

      expect(service.favorites.length).toBe(0);

      service.addFavorite(mockFavorite);
      
      expect(service.favorites.length).toBe(1);
      expect(service.favorites[0].id).toBe(1);
      expect(service.favorites[0].name).toBe('Derp');

      service.removeFavorite(1);

      expect(localStorage.setItem).toHaveBeenCalledWith(service.storageKey, JSON.stringify([mockFavorite]));

      let localStorageFavorite = JSON.parse(localStorage.getItem(service.storageKey));

      expect(localStorageFavorite.length).toBe(0);
    });
    it('remove a favorite item from \'favorites\' and not from localStorage (when disabled)', () => {
      expect(service.removeFavorite).toBeDefined();
      expect(service.addFavorite).toBeDefined();
      spyOn(localStorage, 'setItem').and.callThrough();

      expect(service.favorites.length).toBe(0);
      
      service.isLocalStorageEnabled = false;
      
      service.addFavorite(mockFavorite);
      
      expect(service.favorites.length).toBe(1);
      expect(service.favorites[0].id).toBe(1);
      expect(service.favorites[0].name).toBe('Derp');

      service.removeFavorite(1);
      
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });
  describe('Function: isFavorite(id)', () => {
    it('should return true if an id is present inside of the favorites.', () => {
      expect(service.isFavorite).toBeDefined();
      expect(service.addFavorite).toBeDefined();
      expect(service.removeFavorite).toBeDefined();
      service.addFavorite(mockFavorite);
      expect(service.isFavorite(1)).toBeTruthy();
      service.removeFavorite(1);
      expect(service.isFavorite(1)).toBeFalsy();
    });
  });

  afterEach(() => {
    localStorage.clear();
  });
});
