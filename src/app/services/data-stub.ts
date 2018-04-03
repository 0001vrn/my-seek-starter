import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Data } from './models/data';
import { testData } from './models/test-data';

export class DataStub {
  public get(url: string): Observable<Data[]> {
    return Observable.of(testData);
  }
  
}