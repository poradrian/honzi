import React from 'react';
import { getAverage } from '../utils/functions';

function Stats({ albums, audioFeatures }) {
  const acousticness = audioFeatures.map((track) => track.acousticness);
  const danceability = audioFeatures.map((track) => track.danceability);
  const energy = audioFeatures.map((track) => track.energy);
  const instrumentalness = audioFeatures.map((track) => track.instrumentalness);
  const liveness = audioFeatures.map((track) => track.liveness);
  const valence = audioFeatures.map((track) => track.valence);

  return (
    <>
      {audioFeatures && albums && albums.length ? (
        <div>
          <div className='pb-1 font-serif font-semibold text-center text-gray-100 border-b border-blue-gray-600 md:(mt-4 text-xl) lg:(pb-2 text-lg text-2xl font-semibold)'>
            Stats for the selected time range
          </div>
          <div className='mt-4 xl:mt-6 lg:w-[93%] lg:pl-7'>
            <div className='flex flex-col justify-center items-center w-full font-semibold text-base text-left text-light-50 tracking-wider lg:(flex-row flex-wrap justify-between)'>
              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Acousticness</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(acousticness)}%`,
                    }}></div>
                </div>
              </div>
              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Danceability</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(danceability)}%`,
                    }}></div>
                </div>
              </div>
              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Energy</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(energy)}%`,
                    }}></div>
                </div>
              </div>
              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Liveness</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(liveness)}%`,
                    }}></div>
                </div>
              </div>

              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Instrumental</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(instrumentalness)}%`,
                    }}></div>
                </div>
              </div>
              <div className='flex flex-col h-8 min-h-0 my-1 w-[30%]'>
                <div>Valence</div>
                <div className='relative flex-grow-1 h-1.5 max-h-1.5 mt-1 w-full'>
                  <div className='absolute bg-true-gray-600 h-full w-full left-0 top-0'></div>
                  <div
                    className='stats-bar-filled'
                    style={{
                      width: `${getAverage(valence)}%`,
                    }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 px-6 font-mono text-s'>
            <p>
              What is valence? Valence describes the musical positiveness
              conveyed by a track. Tracks with high valence sound more positive
              (e.g. happy, cheerful, euphoric), while tracks with low valence
              sound more negative (e.g. sad, depressed, angry).
            </p>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center '>
          <p className='text-gray-100 text-lg'>
            No results. Listen to some more music and try again later!
          </p>
        </div>
      )}
    </>
  );
}

export default Stats;
