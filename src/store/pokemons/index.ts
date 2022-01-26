import { Reducer } from "redux";
import { IPokemonsState, PokemonsTypes } from "./types";

const INITIAL_STATE: IPokemonsState = {
  pokemons: [],
  loading: false,
  isStartInfiniteScroll: false,
  addPage: "",
};
const reducer: Reducer<IPokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsTypes.SET_POKEMONS:
      return { ...state, pokemons: action.payload.pokemons };

    case PokemonsTypes.IS_LOADING:
      return { ...state, loading: action.payload.loading };

    case PokemonsTypes.IS_START_INFINITE_SCROLL:
      return {
        ...state,
        isStartInfiniteScroll: action.payload.isStartInfiniteScroll,
      };

    case PokemonsTypes.ADD_NEXT_PAGE:
      return { ...state, addPage: action.payload.addPage };

    default:
      return state;
  }
};
export default reducer;
