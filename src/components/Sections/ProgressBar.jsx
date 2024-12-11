import React from 'react';

const ProgressBar = ({ height, value, max, color = 'blue' }) => {
  const percentComplete = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`h-${height} rounded-full ${`bg-${color}-600`}`}
        style={{ width: `${percentComplete}%` }}
      />
    </div>
  );
};

export default ProgressBar;