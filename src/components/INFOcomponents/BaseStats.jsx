import React from 'react';

const BaseStats = ({ pokemon }) => {
  return (
    <div className="BaseStats">
      <h3>Base Stats</h3>
      {pokemon && pokemon.stats.map((stat) => (
        <div key={stat.stat.name}>
          <p>{stat.stat.name}: {stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
};

export default BaseStats;
