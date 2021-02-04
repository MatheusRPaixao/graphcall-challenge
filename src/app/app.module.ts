import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SearchYoutubeVideosComponent } from './search-youtube-videos/search-youtube-videos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {VimeModule} from '@vime/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchYoutubeVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    VimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
