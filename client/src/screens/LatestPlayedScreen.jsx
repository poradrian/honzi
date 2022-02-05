import React, { useState, useEffect } from 'react';
import { getRecentTracks } from '../utils/api-client';
import { catchErrors } from '../utils/functions';
import { LatestPlayedSection } from '../components/Section';
import LatestPlayedTracklist from '../components/LatestPlayed';

function LatestPlayedScreen() {
  const [latestTracks, setLatestTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userRecentTracks = await getRecentTracks();
      setLatestTracks(userRecentTracks.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {latestTracks && (
        <div className='bg-geometrical-texture '>
          <LatestPlayedSection title='latest tracks played'>
            <LatestPlayedTracklist latestTracks={latestTracks.items} />
          </LatestPlayedSection>
        </div>
      )}
    </>
  );
}

export default LatestPlayedScreen;
