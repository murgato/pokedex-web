import React, { useEffect } from "react";

import { InfiniteScroll, MiniPokemonDetails } from "../../components";
import { PokemonControllers } from "../../controllers";
import "../../css/Pokedex.css";
import { SpinnerLoading } from "../../styled-components/MiniPokemonDetails";
import * as action from "../../store/pokemons/actions";
import { useShallowEqualSelector } from "../../hooks/useShallowEqualSelector";
import { IPokemonsState } from "../../store/pokemons/types";

const Pokedex = (): JSX.Element => {
  const { pokemons, addPage, loading, isStartInfiniteScroll }: IPokemonsState =
    useShallowEqualSelector<IPokemonsState>(
      (state: IPokemonsState) => state.pokemons
    );

  useEffect(() => {
    if (pokemons && pokemons.length === 0) getPokemon();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  const getPokemon = async () => {
    action.isLoading(true);

    let response = await PokemonControllers.getPokemons();
    let auxPokemons: any[] = [];

    let promise: any = response.results?.map(async (result: any) => {
      let pokemon = await PokemonControllers.getOnlyPokemon(result.url);
      auxPokemons[pokemon.id] = pokemon;
    });

    await Promise.all(promise);

    auxPokemons = auxPokemons.filter((pokemon) => pokemon !== null);
    if (auxPokemons && auxPokemons.length === 0) return;
    if (auxPokemons && pokemons && auxPokemons.length === pokemons.length) {
      action.isLoading(false);
      return;
    }

    action.setPokemons(auxPokemons);
    action.setNextPage(response.next);
    action.isLoading(false);
  };

  const addNextPage = async () => {
    action.isLoading(true);

    let auxPokemons = JSON.parse(JSON.stringify(pokemons));
    let response = await PokemonControllers.getNextPage(addPage);
    let auxNewPokemons: any[] = [];

    let promise: any = response.results?.map(async (result: any) => {
      let pokemon = await PokemonControllers.getOnlyPokemon(result.url);
      auxNewPokemons[pokemon.id] = pokemon;
    });

    await Promise.all(promise);

    auxNewPokemons = auxNewPokemons.filter((pokemon) => pokemon !== null);
    auxNewPokemons = auxNewPokemons.filter((pokemon) => pokemon.id <= 898);
    if (auxNewPokemons.length === 897) action.isStartInfiniteScroll(false);
    let newPokemons = auxPokemons.concat(auxNewPokemons);

    if (newPokemons.length === 0) return;
    if (newPokemons.length === auxPokemons.length) {
      action.isLoading(false);
      return;
    }

    action.isStartInfiniteScroll(true);
    action.setPokemons(newPokemons);
    action.setNextPage(response.next);
    action.isLoading(false);
  };

  return (
    <>
      <div className="pokedex">
        <>
          {pokemons?.map((pokemon: any, index: number) => {
            return (
              <div key={index}>
                <MiniPokemonDetails
                  id={pokemon.id}
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
