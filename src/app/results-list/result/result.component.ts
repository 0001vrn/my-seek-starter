import { Component, OnInit, Input } from '@angular/core';

import { FavoritesService } from '../../services/favorites.service';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

class ArtistFavorite{
  constructor(id, artist='', largeThumbnail='', smallThumbnail=''){

  }
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  entity;
  thumbnailImage;

  @Input() details: any;
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.details = this.details || {};
    this.entity = this.entity || {};
    this.thumbnailImage = this.getImage(this.details.image, 3);
  }

  getImage(images, index) {
    let imageUrl = '';
    if (images && images.length && images[index] && images[index]['#text']) {
        imageUrl = images[index]['#text'];
    }
    return imageUrl
  }
  addFavorite(artist) {
    if (artist) {
        let favorite = new ArtistFavorite(artist.mbid, artist.name, this.getImage(artist.image, 3), this.getImage(artist.image, 2));
        this.favoritesService.addFavorite(favorite);
    }
  }
}
