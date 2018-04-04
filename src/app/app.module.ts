import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SeekComponent } from './seek/seek.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';

import { HttpServiceService } from './services/http-service.service';
import { FavoritesService } from './services/favorites.service';
import { DataService } from './services/data.service';
import { MyComponent } from './my/my.component';
import { HighlightMyTextDirective } from './shared/directives/highlight-my-text.directive';
import { DateFormatterPipe } from './shared/pipes/date-formatter-pipe';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SeekComponent,
    DetailsComponent,
    MainComponent,
    MyComponent,
    HighlightMyTextDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  providers: [ HttpServiceService, FavoritesService, DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
