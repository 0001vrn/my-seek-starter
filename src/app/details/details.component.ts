import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  artistInfo: any;
  constructor() { }

  ngOnInit() {
  }

  getMainImage() {
    let mainImageUrl = '';
    if(this.artistInfo && this.artistInfo.images && this.artistInfo.images[3] && this.artistInfo.images[3]['#text'])
    {
      mainImageUrl =  this.artistInfo.images[3]['#text'];
    }
    return mainImageUrl;
  }
  deleteFavorite(id){
    
  }
}
