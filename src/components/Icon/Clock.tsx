import React from 'react';

const Clock = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.5 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
      ></path>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 5v5l3.333 1.667"></path>
    </svg>
  );
};

export default Clock;
