import axios from 'axios';

//no need to write the entire spotify url
//because the base was set globally in auth-provider (line 120)
function getCurrentUserProfile() {
  return axios.get('/me');
}

// Get a List of Current User's Playlists
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
function getCurrentUserPlaylists(limit = 20) {
  return axios.get(`/me/playlists?limit=${limit}`);
};

// Get a User's Top Artists and Tracks
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks

function getTopArtists(time_range = 'short_term') {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};

function getTopTracks(time_range = 'short_term') {
  return axios.get(`/me/top/tracks?time_range=${time_range}`);
};

//  Get a List of Current User's recent played Tracks
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played
function getRecentTracks(limit = 10) {
  return axios.get(`me/player/recently-played?limit=${limit}`);
};

// Get Spotify catalog information for a single album
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album
function getAlbumInfo(id) {
  return axios.get(`/albums?ids=${id}`);
}

// Get audio features for multiple tracks based on their Spotify IDs
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features
function getAudioFeatures(ids) {
  return axios.get(`/audio-features?ids=${ids}`);
}

export { getCurrentUserProfile, getCurrentUserPlaylists, getTopArtists, getTopTracks, getRecentTracks, getAlbumInfo, getAudioFeatures };
