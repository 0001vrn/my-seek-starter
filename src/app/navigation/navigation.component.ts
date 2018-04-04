import { Component, OnInit } from '@angular/core';

import { HighlightMyTextDirective } from '../shared/directives/highlight-my-text.directive';
import { DateFormatterPipe } from '../shared/pipes/date-formatter-pipe';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  dateVar = new Date();
  constructor() { }

  ngOnInit() {
  }

}
