import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchYoutubeVideosComponent} from './search-youtube-videos/search-youtube-videos.component';


const routes: Routes = [
  {path: '', redirectTo: 'searchVideos', pathMatch: 'full' },
  {path: 'searchVideos', component: SearchYoutubeVideosComponent},
  {path: '**', redirectTo: 'searchVideos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
