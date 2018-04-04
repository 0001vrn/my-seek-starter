import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { FavoritesService, MockFavoritesService } from '../../services/favorites.service';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockImages: any;
  let favoritesService: FavoritesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent, TruncatePipe ],
      providers: [
        { provide: FavoritesService, useClass: MockFavoritesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    favoritesService = TestBed.get(FavoritesService);
    mockImages = [
      {'#text':'1'},
      {'#text':'2'},
      {'#text':'3'},
      {'#text':'4'},
    ];
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should render its HTML template', async(() => {
    expect(fixture.nativeElement.innerHTML).toContain('result');
  }));

  describe('Function: getImage(images, index)', () =>{
    it('should be defined', () => {
      expect(component.getImage).toBeDefined();

      expect(component.getImage(mockImages, 0)).toBe('1');
      expect(component.getImage(mockImages, 3)).toBe('4');
      expect(component.getImage(mockImages, 4)).toBe('');
    });

  });
  describe('Function: addFavorite(artist)', () =>{
    it('should be defined', () => {
      spyOn(favoritesService,'addFavorite').and.callThrough();
      // spyOn(favoritesService,'addFavorite').and.callFake(() => {});
      // spyOn(favoritesService,'addFavorite').and.returnValue({
      //   id: 1,
      //   name: 'Derp'
      // });

      expect(component.addFavorite).toBeDefined();
      component.addFavorite({mbid: 1, name: 'Derp'});

      expect(favoritesService.addFavorite).toHaveBeenCalled();
    });
  });
});
