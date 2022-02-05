//higher-order function for async/await error handling
function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };
}

/**
 * Format milliseconds to time duration
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example 216699 -> '3:36'
 */
function formatDuration(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor(((ms % 60000) / 1000));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum / arr.length.toFixed(2) * 100;
}




export { catchErrors, formatDuration, getAverage };