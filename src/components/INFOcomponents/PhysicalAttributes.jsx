import React from 'react';

const PhysicalAttributes = ({ pokemon }) => {
  return (
    <div className="PhysicalAtributes">
      <h3>Physical Attributes</h3>
      <div className="Height">
        <p>Height:<br/> {pokemon ? (pokemon.height / 10) : ''} m</p>
      </div>
      <div className="Weight">
        <p>Weight:<br/> {pokemon ? (pokemon.weight / 10) : ''} kg</p>
      </div>
      <div className="Abilites">
        <p>Abilities:<br/> {pokemon ? pokemon.abilities.map((ability) => ability.ability.name).join(', ') : ''}</p>
      </div>
      <div className="BaseExperience">
        <p>Base Experience:<br/> {pokemon ? pokemon.base_experience : ''}</p>
      </div>
    </div>
  );
};

export default PhysicalAttributes;
