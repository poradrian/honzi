import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProfileScreen from './screens/ProfileScreen';
import ArtistScreen from './screens/ArtistScreen';
import LatestPlayedScreen from './screens/LatestPlayedScreen';
import TrackScreen from './screens/TrackScreen';

function AuthenticatedApp() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<ProfileScreen />} />
        <Route path='/top-artists' element={<ArtistScreen />}></Route>
        <Route path='/top-tracks' element={<TrackScreen />}></Route>
        <Route path='/latest-played' element={<LatestPlayedScreen />}></Route>
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
