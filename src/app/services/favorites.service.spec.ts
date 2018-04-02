import { TestBed, inject, async } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesService]
    });

    service = TestBed.get(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getFavoritesFromStorage() should be defined', () => {
    expect(service.getFavoritesFromStorage).toBeDefined();
  });

  it('getFavoritesFromStorage() should return an array of localStorage (when it\'s enabled)', () => {
    expect(service.getFavoritesFromStorage).toBeDefined();

    let mockStorageFavorites = [
      { id: 1 },
      { id: 2 }
    ];

    localStorage.setItem(service.storageKey, JSON.stringify(mockStorageFavorites));

    let favoritesFromStorageCall: any = service.getFavoritesFromStorage();

    expect(favoritesFromStorageCall.length).toBe(2);  
    expect(favoritesFromStorageCall[0].id).toBe(1);
    expect(favoritesFromStorageCall[1].id).toBe(2);
  });

  it('should be defined with all of its default value', () => {
    expect(service.storageKey).toBe('favoritesService');
    expect(service.isLocalStorageEnabled).toBeTruthy();
  });
});
