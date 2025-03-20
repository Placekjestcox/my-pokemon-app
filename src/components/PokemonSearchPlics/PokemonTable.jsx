import React from "react";
import { Link } from "react-router-dom";

const PokemonTable = ({ pokemonList, firstCellContent }) => {
  return (
    <table className="pokemon-table">
    <tbody>
    {[...Array(Math.ceil(pokemonList.length / 4))].map((_, rowIndex) => {
        const startIndex = rowIndex * 4;
        const endIndex = startIndex + 4;
        const rowPokemons = pokemonList.slice(startIndex, endIndex);
        return (
            <tr key={rowIndex}>
            {rowPokemons.map((pokemon, index) => {
            const pokemonId = pokemon.url.split("/")[6];
            return (
                  <td key={index}>
                    {pokemonId === "1" && firstCellContent ? (
                      <div>
                        <Link to={`/pokemon/${firstCellContent.id}`}>
                          <img src={firstCellContent.sprites.front_default} alt={firstCellContent.name} style={{ width: "140px", height: "140px" }}/>
                          <h4>ID:{firstCellContent.id} - {firstCellContent.name}</h4>
                        </Link>
                      </div>
                    ) : (
                      <Link to={`/pokemon/${pokemonId}`}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} style={{ width: "140px", height: "140px" }}/>
                        <h4>ID:{pokemonId} - {pokemon.name}</h4>
                      </Link>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
