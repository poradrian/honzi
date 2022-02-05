import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';

function SectionWrapper({ children, title, viewAll, breadcrumb, rangeButton }) {
  return (
    <section>
      <div className='mb-10 <sm:mx-4 mt-15 md:mt-20 xl:px-5'>
        <div className='mx-auto container @2xl:min-w-[760px]'>
          <nav className='flex justify-between items-center px-4 md:px-10 xl:px-12 py-4 md:py-5 header-bg border-l-2 border-fuchsia-400 rounded-tl-lg rounded-tr-lg box-shadow-container'>
            <h2 className='flex font-serif text-lg md:text-xl lg:font-semibold text-white uppercase tracking-wider title-text-shadow'>
              {breadcrumb && (
                <span className='breadcrumb'>
                  <Link
                    to='/'
                    className='opacity-75 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-gray-200'>
                    Home
                  </Link>
                </span>
              )}
              {title && (
                <>
                  {viewAll ? (
                    <Link
                      className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-gray-200'
                      to={viewAll}>
                      {title}
                    </Link>
                  ) : (
                    <span>{title}</span>
                  )}
                </>
              )}
            </h2>
            {viewAll && (
              <Link
                to={viewAll}
                className='flex font-serif items-center text-xs md:text-sm text-gray-300 uppercase tracking-wide hover:text-white hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-gray-200'>
                More Info
                <ArrowRightIcon
                  className='h-6 w-6 px-1 text-gray-300 hover:text-white'
                  aria-hidden='true'
                />
              </Link>
            )}
            {rangeButton}
          </nav>
          <div className='bg-container-gradient box-shadow-container border-l-2 border-blue-gray-600 pb-8 px-4 h-5/6'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestPlayedSection({ children, title }) {
  return (
    <section>
      <div className='pb-25 <sm:mx-4 mt-15 xl:px-0'>
        <div className='mx-auto container xl:max-w-[1000px] @md:px-4'>
          <div className='flex justify-center px-4 md:px-10 xl:px-12 py-4 md:py-5 header-bg border-l-2 border-fuchsia-400 rounded-tl-lg rounded-tr-lg section-container-box-shadow'>
            <h2 className='flex font-serif text-lg md:text-xl lg:font-semibold text-gray-100 uppercase tracking-wider title-text-shadow'>
              {' '}
              {title}
            </h2>
          </div>
          <div className='bg-container-gradient box-shadow-container border-l-2 border-blue-gray-600 pb-8 px-4 md:px-8 xl:px-10 h-5/6'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection({ children }) {
  return (
    <section>
      <div className='mb-4 py-6 <sm:mx-4 @md:mx-6 lg:mx-6 md:mt-20 lg:max-w-[490px] xl:max-w-[630px] 2xl:ml-10 bg-stats-gradient border-l-2 border-l-blue-gray-600 border-b-2 border-b-true-gray-800 box-shadow-stats-container text-light-900'>
        {children}
      </div>
    </section>
  );
}

export { SectionWrapper, LatestPlayedSection, StatsSection };
