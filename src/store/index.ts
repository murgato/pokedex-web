import { createStore, Store } from "redux";
import { IPokemonsState } from "./pokemons/types";
import rootReducer from "./rootReducer";

export interface IApplicationState {
  pokemons: IPokemonsState;
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
