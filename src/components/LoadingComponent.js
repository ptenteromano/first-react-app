import React from 'react';

// rotating spinner @3x speed, forward, with primary-color
export const Loading = () => {
  return (
    <div className="col-12">
      <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
      <p>Loading . . .</p>
    </div>
  );
};