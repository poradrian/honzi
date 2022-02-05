import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

function ArtistsUL(props) {
  return (
    <ul
      className='grid grid-cols-2 gap-x-4 gap-y-4 sm:(gap-x-6 gap-y-4 py-3) md:(gap-y-6 mb-8) lg:(grid-cols-5 gap-x-8)'
      {...props}
    />
  );
}

function GenresUL(props) {
  return <ul className='mt-8 leading-8' {...props} />;
}

function LogoutButton(props, onClick) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='<sm:px-8 <sm:ml-0 px-5 py-2 tracking-widest ml-14 font-semibold text-light-200 uppercase border-3 border-true-gray-600 rounded-md hover:border-primary focus:(ring-4 ring-white)'
      {...props}
    />
  );
}

function FullPageSpinner() {
  return (
    <div className='flex flex-col justify-center items-center h-screen text-6xl'>
      <SyncLoader color={'#b31cc7'} />
    </div>
  );
}

export { LogoutButton, FullPageSpinner, ArtistsUL, GenresUL };
