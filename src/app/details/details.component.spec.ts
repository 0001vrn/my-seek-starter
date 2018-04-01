import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render its HTML partial', async(() => {
    let element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.innerHTML).toContain('This is detail view');
  }));
  
  it('Function: getMainImage should return an ImageUrl from a collection', () => {
    expect(component.getMainImage).toBeDefined();

    let mockArtistObject = {
      images: [
        { '#text': '1'},
        { '#text': '2'},
        { '#text': '3'},
        { '#text': '4'}
      ]
    };

    component.artistInfo = mockArtistObject;
    expect(component.getMainImage()).toBe('4');
  });
  it('Function: getMainImage should return an empty string from a collection', () => {
    expect(component.getMainImage).toBeDefined();

    let mockArtistObject = {
      images: [
        { '#text': '1'},
        { '#text': '2'},
        { '#text': '3'}
      ]
    };

    component.artistInfo = mockArtistObject;
    expect(component.getMainImage()).toBe('');
  });

  it('Function: deleteFavorite(id)', () => {
    expect(component.deleteFavorite).toBeDefined();
  });
});
