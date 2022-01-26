import React, { useEffect, useState } from "react";
import { InfiniteScroll, MiniPokemonDetails } from "../../components";
import { PokemonControllers } from "../../controllers";
import "../../css/Pokedex.css";

import { SpinnerLoading } from "../../styled-components/MiniPokemonDetails";
const Pokedex = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [addPage, setAddPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isStartInfiniteScroll, setIsStartInfiniteScroll] = useState(false);
  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    let response = await PokemonControllers.getAllPokemon();
    let auxPokemons: any[] = [];

    setLoading(true);

    let promise: any = response.results?.map(async (result: any) => {
      let pokemon = await PokemonControllers.getOnlyPokemon(result.url);
      auxPokemons[pokemon.id] = pokemon;
    });

    await Promise.all(promise);

    auxPokemons = auxPokemons.filter((pokemon) => pokemon !== null);

    if (auxPokemons.length === 0) return;

    setLoading(false);
    setPokemons(auxPokemons);
    setAddPage(response.next);
  };

  const addNextPage = async () => {
    let auxPokemons = JSON.parse(JSON.stringify(pokemons));
    let response = await PokemonControllers.getNextPage(addPage, auxPokemons);
    let auxNewPokemons: any[] = [];

    setLoading(true);

    let promise: any = response.results?.map(async (result: any) => {
      let pokemon = await PokemonControllers.getOnlyPokemon(result.url);
      auxNewPokemons[pokemon.id] = pokemon;
    });

    await Promise.all(promise);

    auxNewPokemons = auxNewPokemons.filter((pokemon) => pokemon !== null);
    let newPokemons = auxPokemons.concat(auxNewPokemons);

    if (newPokemons.toString() === auxPokemons.toString()) return;

    if (newPokemons.length === 0) return;

    setIsStartInfiniteScroll(true);
    setLoading(false);
    setPokemons(newPokemons);
    setAddPage(response.next);
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
                  className={"animation-hover"}
                />
              </div>
            );
          })}
        </>
      </div>
      {!loading && pokemons && (
        <InfiniteScroll
          onLoading={addNextPage}
          isStart={isStartInfiniteScroll}
        />
      )}
      <div className="container-btn-lazy-loading">
        <button
          type="button"
          className="btn btn-lazy-loading"
          onClick={addNextPage}
        >
          {loading ? (
            <>
              <SpinnerLoading animation="grow" /> <div>loading...</div>
            </>
          ) : (
            "Load more Pokémon"
          )}
        </button>
      </div>
    </>
  );
};

export default Pokedex;
