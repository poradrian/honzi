import React from 'react';

function LatestPlayedTracklist({ latestTracks }) {
  console.log(latestTracks);
  return (
    <>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <table className='min-w-full mt-4 md:(mt-0 divide-y divide-blue-gray-600)'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='pl-4.5 text-left text-s font-medium text-gray-500 uppercase tracking-wider'>
                    <span className='-px-1.5'>#</span> Title
                  </th>
                  <th
                    scope='col'
                    className='<sm:hidden px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider'>
                    Album
                  </th>
                  <th
                    scope='col'
                    className='<sm:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Date Played
                  </th>
                </tr>
              </thead>
              {latestTracks && latestTracks.length ? (
                <tbody>
                  {latestTracks.map((track, i) => (
                    <tr
                      key={i}
                      className='text-true-gray-400 tabular-nums hover:bg-blue-gray-700 focus:bg-blue-gray-700 '>
                      <td className='px-6 py-2 '>
                        <div className='flex items-center'>
                          <div className='min-w-6 text-sm'>{i + 1}</div>
                          <div className='flex-shrink-1 h-10 w-10'>
                            <img
                              className='h-10 w-10'
                              src={track.track.album.images[2].url}
                              alt={track.track.name}
                            />
                          </div>
                          <div className='ml-4'>
                            <p className='font-medium text-gray-100'>
                              {track.track.name}
                            </p>
                            <div>
                              {track.track.artists.map((artist) => (
                                <span
                                  key={artist.id}
                                  className='text-gray-400 text-sm'>
                                  {artist.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='<sm:hidden px-6 py-4 text-sm'>
                        <p>{track.track.album.name}</p>
                      </td>
                      <td className='<sm:hidden px-6 py-4 text-sm'>
                        {`${track.played_at.slice(
                          11,
                          16
                        )} (GMT) ${track.played_at
                          .replace(/T.*/, '')
                          .split('-')
                          .reverse()
                          .join('-')}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p className='flex justify-center items-center pt-5 text-gray-100 text-lg'>
                  No results. Listen to some more music and try again later!
                </p>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestPlayedTracklist;
