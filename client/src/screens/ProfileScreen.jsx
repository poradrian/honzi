import React, { useEffect, useState } from 'react';
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
} from '../utils/api-client';
import ArtistsRow from '../components/ArtistsRow';
import TopTracklist from '../components/TopTracklist';
import { SectionWrapper } from '../components/Section';
import { catchErrors } from '../utils/functions';
import default_avatar from '../assets/default_avatar.png';

function ProfileScreen() {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtist = await getTopArtists();
      setTopArtists(userTopArtist.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      <main className='pt-8'>
        <div>
          {profile && (
            <div className='flex flex-col items-center justify-center'>
              <div className='w-38 h-38'>
                {profile.images.length > 0 ? (
                  <img
                    src={profile.images[0].url}
                    alt='avatar'
                    className='sm:max-w-full align-middle rounded-1/2'
                  />
                ) : (
                  <img
                    src={default_avatar}
                    alt='default avatar'
                    className='max-w-full align-middle rounded-1/2'
                  />
                )}
              </div>
              <h2 className='my-5 text-2xl md:text-5xl font-bold text-center text-light-200'>
                {profile.display_name}
              </h2>

              <div className='flex items-center text-center text-primary sm:text-xl font-bold'>
                <div>
                  {playlists && playlists.total}
                  <p className='font-semibold uppercase text-gray-400 text-base'>
                    Playlists
                  </p>
                </div>

                <div className='ml-10'>
                  <div>
                    {profile.followers.total}
                    <p className='font-semibold uppercase text-gray-400 text-base'>
                      Followers
                    </p>
                  </div>
                </div>
                <div className='ml-10'>
                  <div>
                    {profile.country}
                    <p className=' font-semibold uppercase  text-gray-400 text-base'>
                      Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {topArtists && topTracks && (
          <div className='xl:flex xl:justify-between xl:px-4 mt-10'>
            <SectionWrapper title='Top Tracks' viewAll='/top-tracks'>
              <TopTracklist tracks={topTracks.items.slice(0, 10)} />
            </SectionWrapper>
            <SectionWrapper title='Top Artists' viewAll='/top-artists'>
              <ArtistsRow artists={topArtists.items.slice(0, 10)} />
            </SectionWrapper>
          </div>
        )}
      </main>
    </>
  );
}

export default ProfileScreen;
