import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Rx';

import { MyComponent } from './my.component';

import { DataStub } from '../services/data-stub';
import { testData } from '../services/models/test-data';
import { DataService } from '../services/data.service';

import { HighlightMyTextDirective } from '../shared/directives/highlight-my-text.directive';
import { DateFormatterPipe } from '../shared/pipes/date-formatter-pipe';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let dataStub: DataStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent, HighlightMyTextDirective, DateFormatterPipe ],
    }).overrideComponent(MyComponent, {
      set: {
        providers: [
          { provide: DataService, useClass: DataStub },
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataStub = fixture.debugElement.injector.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve test data', fakeAsync(() => {
    const spy = spyOn(dataStub, 'get').and.returnValue(
      Observable.of(testData)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.data).toEqual(testData);
    expect(spy.calls.any()).toEqual(true);
  }));
});
