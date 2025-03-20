import React from 'react';
import { Link } from 'react-router-dom'; 

const PokemonCard = ({ name, id, image }) => {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>ID: {id}</p>
      </Link>
    </div>
  );
};

export default PokemonCard;
