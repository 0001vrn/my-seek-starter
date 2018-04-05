import { Component, OnInit } from '@angular/core';

import { Data } from '../services/models/data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  
  data: Data[];
  dateVar = new Date();

  constructor (private dataSvc : DataService ) { }

  ngOnInit() {
    this.dataSvc.get().subscribe(
      data => {
        this.data = data;console.log(data);
      }
    );


  }

}
