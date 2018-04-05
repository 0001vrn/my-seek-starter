import { async, inject, TestBed, withModule, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    Http,
    XHRBackend,
    Response, ResponseOptions,
    HttpModule
} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ResultsListComponent } from './results-list.component';
import { ResultComponent } from './result/result.component';
import { HttpService, MockHttpService } from '../services/http-service.service';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  let httpService: HttpService;
  let backend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListComponent, ResultComponent, TruncatePipe ],
      providers:[ 
        { provide: HttpService, useClass: MockHttpService },
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports:[ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    backend = TestBed.get(XHRBackend);
    httpService = TestBed.get(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render its HTML template', async(() => {
    expect(fixture.nativeElement.innerHTML).toContain('results');
  }));

  it('can provide the mockBackend as XHRBackend',() => {
    expect(backend).not.toBeNull('backend should be provided');
  });

  describe('Function: searchForArtist(query)', () =>{

    it('should be defined', fakeAsync(() => {
      spyOn(httpService, 'findArtists').and.callThrough();
      expect(component.searchForArtist).toBeDefined();
      component.searchForArtist(1);
      component.searchForArtist(2);
      component.searchForArtist(3);
      component.searchForArtist(4);
      tick(501);
      expect(httpService.findArtists).toHaveBeenCalledWith(4);
      expect(httpService.findArtists).toHaveBeenCalledTimes(1);
      
    }));

    it('should be defined with query Himanshu Motwani', fakeAsync(() => {
      spyOn(httpService, 'findArtists').and.callThrough();
      expect(component.searchForArtist).toBeDefined();
      component.searchForArtist('Himanshu Motwani');
      tick(501);
      expect(httpService.findArtists).toHaveBeenCalledWith('Himanshu Motwani');
      expect(httpService.findArtists).toHaveBeenCalledTimes(1);
      expect(component.results).toBeUndefined();
      
    }));
    function findArtistsFake() {
      return new Promise((resolve, reject) => {
        reject({ message: 'No artists match that query.'});
      });
    }
    it('should be defined with query Himanshu Motwani with error', fakeAsync(() => {
      spyOn(httpService, 'findArtists').and.callFake(findArtistsFake);
      expect(component.searchForArtist).toBeDefined();
      component.searchForArtist('Himanshu Motwani');
      tick(501);
      expect(httpService.findArtists).toHaveBeenCalledWith('Himanshu Motwani');
      expect(httpService.findArtists).toHaveBeenCalledTimes(1);
      expect(component.errMsg).toBe('No artists match that query.');
    }));
  });

});
