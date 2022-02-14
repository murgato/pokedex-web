import { action } from "typesafe-actions";
import store from "..";
import { IPokemonState, PokemonTypes } from "./types";

export const setNamePokemon = (name: IPokemonState["name"]) =>
  store.dispatch(action(PokemonTypes.SET_NAME_POKEMON, { name }));

export const setPreviousAndNextPokemon = (
  informationButton: IPokemonState["informationButton"]
) =>
  store.dispatch(
    action(PokemonTypes.SET_INFORMATION_BUTTON, { informationButton })
  );

export const setPokemon = (pokemon: IPokemonState["pokemon"]) =>
  store.dispatch(action(PokemonTypes.SET_POKEMON, { pokemon }));
export const IsShiny = (isShiny: boolean) =>
  store.dispatch(action(PokemonTypes.SET_IS_SHINY, { isShiny }));

