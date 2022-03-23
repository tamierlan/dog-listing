import React from 'react';
import './BreedCard.css';
import BreedProperty from './BreedProperty/BreedProperty';

const BreedCard = (props) => {
  const { breed } = props;
  const { name, id, bred_for, temperament } = breed;

  return (
    <div className="breed-card" key={id}>
      <h3 className="name">{name}</h3>
      <p className="temperament-paragraph">{temperament}</p>
      <BreedProperty label="Bred For" value={bred_for} />
    </div>
  );
};

export default BreedCard;
