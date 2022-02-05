import React from 'react';

function RangeButtons({ activeRange, setActiveRange }) {
  return (
    <div className='flex items-center text-sm <sm:(absolute left-[30%] mb-32) sm:mb-2 md:pb-2 lg:(mb-0 text-base)'>
      <div>
        <button
          type='button'
          onClick={() => setActiveRange('short')}
          className={`btn-range ${
            activeRange === 'short' ? 'bg-violet-700' : ''
          }`}>
          This Month
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={() => setActiveRange('medium')}
          className={`btn-range ${
            activeRange === 'medium' ? 'bg-violet-700' : ''
          }`}>
          6 Months
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={() => setActiveRange('long')}
          className={`btn-range ${
            activeRange === 'long' ? 'bg-violet-700' : ''
          }`}>
          All Time
        </button>
      </div>
    </div>
  );
}

export default RangeButtons;
