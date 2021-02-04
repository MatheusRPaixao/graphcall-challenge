export interface YoutubeApiRequest {
  name: string;
  value: string;
}

export interface YoutubeApiResponse {
  etag: string;
  items: YoutubeApiItems[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  }
  regionCode: string;
}

interface YoutubeApiItems {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: YoutubeApiSnippet;
}

interface YoutubeApiSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: YoutubeApiThumbnail;
    high: YoutubeApiThumbnail;
    medium: YoutubeApiThumbnail;
  };
  title: string;
}

interface YoutubeApiThumbnail {
  width: number;
  height: number;
  url: string;
}
