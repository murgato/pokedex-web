import { createStore, Store } from "redux";
import { IPokemonState } from "./pokemon/types";
import { IPokemonsState } from "./pokemons/types";
import rootReducer from "./rootReducer";

export interface IApplicationState {
  pokemons: IPokemonsState;
  pokemon: IPokemonState
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
