import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { ResultsListComponent } from '../results-list/results-list.component';
import { ResultComponent } from '../results-list/result/result.component';
import { HttpService, MockHttpService } from '../services/http-service.service';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, ResultsListComponent, ResultComponent, TruncatePipe ],
      providers:[         
        { provide: HttpService, useClass: MockHttpService }
      ],
      imports:[ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
