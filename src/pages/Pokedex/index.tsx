import React, { useEffect, useState } from "react";
import { MiniPokemonDetails } from "../../components";
import { PokemonControllers } from "../../controllers";
import "../../css/Pokedex.css";
const Pokedex = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [addPage, setAddPage] = useState("");

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(pokemons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  const getPokemon = async () => {
    let response = await PokemonControllers.getAllPokemon();
    setPokemons(response.pokemon);
    setAddPage(response.nextPage);
  };

  const addNextPage = async () => {
    let auxPokemons = JSON.parse(JSON.stringify(pokemons));
    let { pokemon, nextPage } = await PokemonControllers.getNextPage(
      addPage,
      auxPokemons
    );
    setPokemons(pokemon);
    setAddPage(nextPage);
  };

  return (
    <>
      <div className="pokedex">
        <>
          {pokemons?.map((pokemon: any, index: number) => {
            return (
              <div key={index}>
                <MiniPokemonDetails
                  name={pokemon.name}
                  backgroundColor={pokemon.types[0]}
                  types={pokemon.types}
                  img={pokemon.img_front}
                  img_shiny={pokemon.img_front_shiny}
                />
              </div>
            );
          })}
        </>
      </div>
      <div>
        <button className="btn btn-lazy-loading" onClick={addNextPage}>
          More
        </button>
      </div>
    </>
  );
};

export default Pokedex;
