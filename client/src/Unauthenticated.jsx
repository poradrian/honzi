import React from 'react';
import login_pic from './assets/login_pic.jpg';

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://honzi.herokuapp.com/login';

function UnauthenticatedApp() {
  return (
    <div className='lg:min-h-screen flex'>
      <div className='flex flex-1 flex-col justify-center pb-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-dark-800 <lg:min-h-screen'>
        <div className='mx-auto font-serif w-full max-w-sm lg:w-90'>
          <h2 className='md:mt-25 lg:mt-0 text-center text-5xl font-serif font-extrabold text-slogan-color'>
            Analyze Your Spotify Profile
          </h2>
          <div className='mt-14 flex flex-col items-center'>
            <a className='btn-log' href='http://demo-honzi.netlify.app/'>
              Demo
            </a>
            <p className='my-5 text-base font-serif text-light-700'>or</p>
            <a className='btn-log' href={LOGIN_URI}>
              Connect with Spotify
            </a>
          </div>
        </div>
      </div>
      <div role='banner' className='hidden lg:block relative flex-1'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={login_pic}
          alt='person playing the piano'
        />
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
