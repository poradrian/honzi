import React from 'react';
import { GenresUL } from '../styles/lib';

function randomColour() {
  const genreColours = [
    'bg-pink-300',
    'bg-rose-700',
    'bg-orange-600',
    'bg-amber-400',
    'bg-lime-400',
    'bg-emerald-600',
    'bg-cyan-400',
    'bg-blue-500',
    'bg-indigo-400',
    'bg-violet-700',
    'bg-warm-gray-400',
  ];

  return genreColours[Math.floor(Math.random() * genreColours.length)];
}

function Genres({ artists }) {
  console.log(artists);
  return (
    <>
      {artists.length ? (
        <div className='mt-4 px-6'>
          <h2 className='md:mt-4 lg:pb-2 font-serif font-semibold text-lg md:text-xl lg:font-semibold text-center text-gray-100 border-b border-blue-gray-600'>
            Favourite genres for the selected time range:
          </h2>

          <GenresUL>
            {artists.map((artist, id) => (
              <li key={id} className='inline px-1'>
                <div className='relative inline-flex items-center rounded-full border border-gray-300 text-base px-2 py-0.5'>
                  <div className='absolute flex-shrink-0 flex items-center justify-center'>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${randomColour()} `}
                      aria-hidden='true'
                    />
                  </div>
                  <span className='ml-3.5 font-medium text-gray-300'>
                    {artist.genres[0]}
                  </span>
                </div>
              </li>
            ))}
          </GenresUL>
        </div>
      ) : (
        <p className='flex justify-center items-center pt-5 px-6 text-gray-100 text-lg'>
          No results. Listen to some more music and try again later!
        </p>
      )}
    </>
  );
}

export default Genres;
