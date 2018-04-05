import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Data } from './models/data';

@Injectable()
export class DataService {

  dataUrl: string = './assets/data.json';
  errorMsg = 'default error msg';
  constructor (private http: Http ) { }

  get(): Observable<Data[]> {
    return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : this.errorMsg;
    console.error(error, errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
