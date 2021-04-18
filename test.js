const express = require('express');
const path = require('path');
require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');
const querystring = require('querystring');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: 'http://localhost:8888/callback'
})

spotifyApi.setAccessToken('BQCR9ZKZBXx8R95Eh7ea6yxIHLFoPfxzM4L0hcsZHucQBHMEm6mSf53ULpBW2stGVNntljuij6eWjHHYvzrJW68kbTX-lvTKjZEEr4xijK7YONlP4LKfOLxIw8MA9RlIchDdrzGrR6K5ijBkTPWCCEFaIA2jaL1DLA')

// Get Elvis' albums
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
