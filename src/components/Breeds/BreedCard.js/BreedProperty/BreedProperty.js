import React from 'react';
import './BreedProperty.css';

const BreedProperty = (props) => {
  const { label, value } = props;

  return (
    <div>
      <span className="breed-property-label">{label}: </span>
      <span className="breed-property-value">{value ? value : 'Unknown'}</span>
    </div>
  );
};

export default BreedProperty;
