import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./PokemonSearchPlics/SearchBar";
import PokemonTable from "./PokemonSearchPlics/PokemonTable";
import Pagination from "./PokemonSearchPlics/Pagination";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [_, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [firstCellContent, setFirstCellContent] = useState(null);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSearch = async () => {
    if (pokemonName) {
      const pokemonId = parseInt(pokemonName, 10);
      if (!isNaN(pokemonId) && pokemonId >= 1 && pokemonId <= 1000) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemon(response.data);
        setFirstCellContent(response.data);
      } else {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        setPokemon(response.data);
        setFirstCellContent(response.data);
      }
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${(page - 1) * 16}`);
      setPokemonList(response.data.results);
    };
    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemon-search">
      <SearchBar pokemonName={pokemonName} handleChange={handleChange} handleSearch={handleSearch} />
      <PokemonTable pokemonList={pokemonList} firstCellContent={firstCellContent} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PokemonSearch;
