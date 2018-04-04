import { Component, OnInit } from '@angular/core';

import { ResultComponent } from './result/result.component';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  results = [];
  debounceQuery: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  searchForArtist(query){
    if(query){
       clearTimeout(this.debounceQuery);

       this.debounceQuery = setTimeout(() => {
          this.httpService.findArtists(query)
              .then((artistData : any) => {
                console.log(artistData);
              }, error => {
                console.warn(error.message);
              })
       }, 500);
    }
  }
}
