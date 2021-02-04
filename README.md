# GraphCall challenge 

Project created by Matheus Paixão for a challenge propose by GraphCall

## Local serve 

To run the app you need to:

    npm install
    npm start or ng serve


## Features

- Search videos on Youtube
- Analyze videos by thumbnail, title and description 
- Watch selected video
- Responsive for smaller devices

## Implementation

The app consist of:

#### Utils

. A service for communication with the YoutubeAPI;

. A interface component to map the communication with the YoutubeAPI


#### Views

. A component to process the user input and the response from the YoutubeAPI


### Frameworks
- BrowserModule
- AppRoutingModule
- HttpClientModule
- NgbModule
- YouTubePlayerModule
- BrowserAnimationsModule
- MatFormFieldModule
- ReactiveFormsModule
- MatInputModule
- NgxLoadingModule

## Cloud service

The app is available on 
http://graphcallchallenge.s3-website-sa-east-1.amazonaws.com/searchVideos
for facilitate the test.

