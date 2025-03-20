import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PokemonDetail.css";
import PhysicalAttributes from "./INFOcomponents/PhysicalAttributes";
import BaseStats from "./INFOcomponents/BaseStats";
import EvolutionChain from "./INFOcomponents/EvolutionChain";
import Moves from "./INFOcomponents/Moves";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonId = parseInt(id, 10);
    if (pokemonId < 1 || pokemonId > 1000 || isNaN(pokemonId)) {
      navigate("/");
    } else {
      const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
          setPokemon({
            ...response.data,
            description: speciesResponse.data.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            )?.flavor_text || "No description available."
          });
        } catch (error) {
          console.error("Pokemon details not found!", error);
          setPokemon(null);
        }
      };

      fetchPokemonDetails();
    }
  }, [id, navigate]);

  const goToNextPokemon = () => {
    const nextId = parseInt(id, 10) + 1;
    if (nextId <= 1000) { navigate(`/pokemon/${nextId}`); }
  };

  const goToPrevPokemon = () => {
    const prevId = parseInt(id, 10) - 1;
    if (prevId >= 1) { navigate(`/pokemon/${prevId}`); }
  };

  return (
    <div className="strona">
      <div className="przyciski">
        <div className="extra-button">
          <button onClick={() => navigate("/")}>Back to Pokedex</button>
        </div>
        <div className="buttons-container">
          <button onClick={goToPrevPokemon} disabled={parseInt(id, 10) <= 1}>
            Prev
          </button>
          <button onClick={goToNextPokemon} disabled={parseInt(id, 10) >= 1000}>
            Next
          </button>
        </div>
      </div>
      <div className="pokemon">
        <div className="photo">
          {pokemon && (<img src={pokemon.sprites.front_default} alt={pokemon.name} />)}
        </div>
        <div className="name">
          <b>{pokemon ? pokemon.name : "Ładowanie..."}</b> - {pokemon?.id}
        </div>
      </div>
      <div className="Description">
        <h3>Description</h3>
        {pokemon ? <p>{pokemon.description}</p> : <p>Loading...</p>}
      </div>
      <PhysicalAttributes pokemon={pokemon} />
      <BaseStats pokemon={pokemon} />
      <EvolutionChain pokemonId={pokemon ? pokemon.id : null} />
      <Moves pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetail;
