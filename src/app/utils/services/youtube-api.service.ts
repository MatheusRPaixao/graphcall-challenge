import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YoutubeApiRequest, YoutubeApiResponse} from "../interfaces/youtube-api";

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private youtubeApiKey = 'AIzaSyCRkqXEGlMHMLgtOG0IuzD5IUZbvO9Kq9c';
  private baseYoutubeApiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.youtubeApiKey}`;

  constructor(
    private http: HttpClient,
  ) { }

  getYoutubeVideos(request: YoutubeApiRequest[]): Observable<YoutubeApiResponse> {
    // Create request url
    let url = this.baseYoutubeApiUrl;
    request.forEach((param) => {
      url = url.concat(`&${param.name}=${param.value}`);
    });

    return this.http.get(url) as Observable<YoutubeApiResponse>;
  }
}
