import React from "react";

const SearchBar = ({ pokemonName, handleChange, handleSearch }) => {
  return (
    <div className="gora">
      <h1>Wyszukaj Pokemona</h1>
      <input id="pokemon-input" placeholder="Wpisz ID pokemona lub nazwe "type="text" value={pokemonName} onChange={handleChange}/>
      <button onClick={handleSearch} id="szukaj">Szukaj</button>
    </div>
  );
};

export default SearchBar;
