import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const EvolutionChain = ({ pokemonId }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const navigate = useNavigate(); 

useEffect(() => {
  if (pokemonId) {
    const fetchEvolutionChain = async () => {
      try {
          const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
          );
          const evolutionResponse = await axios.get(response.data.evolution_chain.url);
          const chain = [];
          let evo = evolutionResponse.data.chain;
          while (evo) {
            const speciesUrlParts = evo.species.url.split("/");
            const speciesId = speciesUrlParts[speciesUrlParts.length - 2]; 
            chain.push({
            name: evo.species.name,
            id: speciesId, 
            });
            evo = evo.evolves_to.length > 0 ? evo.evolves_to[0] : null;
          }
          setEvolutionChain(chain);
        } catch (error) {
          console.error("Błąd pobierania łańcucha ewolucji", error);
          setEvolutionChain([]);
        }
      };
      fetchEvolutionChain();
    }
  }, [pokemonId]);
  const handleEvolutionClick = (id) => {
    navigate(`/pokemon/${id}`); 
  };

  return (
    <div className="EvolutionChain">
      <h3>Evolution Chain</h3>
    <div className="evolution-images">
      {evolutionChain.map((evolution, index) => (
    <div className={`evolution ${evolution.id === String(pokemonId) ? "highlight" : ""}`} key={index}
    onClick={() => handleEvolutionClick(evolution.id)}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`} alt={evolution.name}/>
      <p>{evolution.name}</p>
    </div>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
