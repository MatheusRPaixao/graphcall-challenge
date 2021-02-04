import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from '../utils/services/youtube-api.service';
import {YoutubeApiItem, YoutubeApiRequest, YoutubeApiResponse} from '../utils/interfaces/youtube-api';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ngxLoadingAnimationTypes} from 'ngx-loading';

@Component({
  selector: 'app-search-youtube-videos',
  templateUrl: './search-youtube-videos.component.html',
  styleUrls: ['./search-youtube-videos.component.scss']
})
export class SearchYoutubeVideosComponent implements OnInit {
  youtubeResponse: YoutubeApiResponse;
  selectedVideo: YoutubeApiItem;
  searchInput: FormControl;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(
    private youtubeApiService: YoutubeApiService,
  ) { }

  ngOnInit(): void {
    this.setSearchInputAndWatcher();

    // Initialize search
    this.searchInput.setValue('React');
  }

  selectVideo(item: YoutubeApiItem): void {
    this.selectedVideo = item;
  }

  private loadVideos(value: string): void {
    const params: YoutubeApiRequest[] = [
      {name: 'q', value: value},
      {name: 'type', value: 'video'},
      {name: 'maxResults', value: '20'},
      {name: 'part', value: 'id,snippet'},
    ];
    this.youtubeApiService.getYoutubeVideos(params).subscribe((response) => {
      this.youtubeResponse = response;
      this.selectVideo(this.youtubeResponse.items[0]);
    });
  }

  private setSearchInputAndWatcher(): void {
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.loadVideos(value);
      });
  }
}
