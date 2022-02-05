import React from 'react';
import { ArtistsUL } from '../styles/lib';

function ArtistsRow({ artists }) {
  return (
    <>
      {artists && artists.length ? (
        <ArtistsUL type='artist'>
          {artists.map((artist) => (
            <li
              key={artist.id}
              className='group relative mt-4 bg-blue-gray-800 rounded-lg flex flex-col box-shadow-container overflow-hidden hover:bg-blue-gray-700'>
              <div className='group relative'>
                {artist.images[1] && (
                  <div className='aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-3'>
                    <img
                      src={artist.images[1].url}
                      alt={artist.name}
                      className='object-cover'
                    />
                  </div>
                )}
                <div className='flex-1 p-2 space-y-2 flex flex-col '>
                  <h3 className='text-sm md:text-base font-medium text-gray-100'>
                    {artist.name}
                  </h3>
                  <p className='text-sm text-gray-400'>
                    {new Intl.NumberFormat().format(artist.followers.total)}{' '}
                    followers
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ArtistsUL>
      ) : (
        <p className='flex justify-center items-center pt-5 lg:py-10 text-lg text-gray-200'>
          No results. Listen to some more music and try again later!
        </p>
      )}
    </>
  );
}

export default ArtistsRow;
