import React from 'react';
import WorldFlag from 'react-world-flags';

const Flag = ({ countryCode }) => {
  return (
    <div style={{ width: '30px', height: '30px' }}>
      <WorldFlag code={countryCode} />
    </div>
  );
};

export default Flag;
