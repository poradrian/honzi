import express from 'express';
import dotenv from "dotenv";
import axios from "axios";
import randomstring from 'randomstring';
import path from 'path';

dotenv.config();
const app = express();


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; //route where the user is redirected after they authorized the app
const FE_URI = process.env.FE_URI;
const PORT = process.env.PORT || 8888;

//tells express to priority serve any static files from vitejs
const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
app.use(express.static(path.resolve(__dirname, './client/dist')));



//1. request authorization code from spotify
app.get('/login', (req, res) => {
  const state = randomstring.generate(16);
  res.cookie('spotify_auth_state', state); //setting cookie

  // narrow down the permissions for the client
  //https://developer.spotify.com/documentation/general/guides/authorization/scopes/
  const scope = [
    'user-read-private',
    'user-top-read',
    'user-read-recently-played'
  ].join(' ');

  //URLSearchParams API serializes an object into a query string (that stuff after "?" in the url)
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  }).toString();

  //redirects the user to spotify's authorization page
  res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});


//2. request access+refresh token by making POST req to spotify, using the authorization code recieved above
app.get('/callback', function (req, res) {
  //stores the value of the authorization
  //that's on the queryParam
  const code = req.query.code || null;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }).toString(),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    //3. use the access token to req data from spotify API
    .then(response => {
      if (response.status === 200) {
        //axios stores the data returned by request in a data property on the response obj
        const { access_token, refresh_token, expires_in } = response.data;

        const params = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in
        }).toString();
        //redirect to react app & pass the query params
        res.redirect(`${FE_URI}?${params}`);
      } else {
        res.redirect(`/${new URLSearchParams({ error: 'invalid_token' }).toString()}`);
      }
    })
    .catch(error => {
      res.send(error);
    });
});

//refreshing access token in case it expires
app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }).toString(),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});

// catch all requests for the express routes. if express doesnt recognize a route, it will defer to reactapp
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});