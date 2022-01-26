import { action } from "typesafe-actions";
import store from "..";
import { IPokemonsState, PokemonsTypes } from "./types";

export const setPokemons = (pokemons: IPokemonsState["pokemons"]) =>
  store.dispatch(action(PokemonsTypes.SET_POKEMONS, { pokemons }));

export const setNextPage = (addPage: IPokemonsState["addPage"]) =>
  store.dispatch(action(PokemonsTypes.ADD_NEXT_PAGE, { addPage }));

export const isLoading = (loading: IPokemonsState["loading"]) =>
  store.dispatch(action(PokemonsTypes.IS_LOADING, { loading }));

export const isStartInfiniteScroll = (
  isStartInfiniteScroll: IPokemonsState["isStartInfiniteScroll"]
) =>
  store.dispatch(
    action(PokemonsTypes.IS_START_INFINITE_SCROLL, { isStartInfiniteScroll })
  );
