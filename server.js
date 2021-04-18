const express = require('express');
const path = require('path');
require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');
const querystring = require('querystring');

const scopes = ['user-read-private', 'user-read-email', 'user-top-read'];
const client_id = process.env.clientId;
const client_secret = process.env.clientSecret;
const redirect_uri = 'http://localhost:8888/callback'; 
const stateKey = 'spotify_auth_state';
const state = generateRandomString(16);
const showDialog = true;
const responseType = 'token';

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirect_uri,
  clientId: client_id
});

const authorizeURL = spotifyApi.createAuthorizeURL(
  scopes,
  state,
  showDialog,
  responseType
);


const app = express();
app.set('view engine', 'ejs');

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
  res.render('pages/index')
})

app.get('/login', (req,res)=>{
  res.redirect(authorizeURL)
})

app.get('/callback', function(req, res) {
  res.sendFile(__dirname + '/public/callback.html')
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));