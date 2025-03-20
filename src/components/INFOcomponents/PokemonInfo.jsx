import React from 'react';

const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="photo">
        {pokemon && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      </div>
      <div className="name">
        <b>{pokemon ? pokemon.name : 'Ładowanie...'}</b>
        <span> #{pokemon ? pokemon.id : ''}</span>
      </div>
    </div>
  );
};

export default PokemonInfo;
