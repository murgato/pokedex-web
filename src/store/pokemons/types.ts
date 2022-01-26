export enum PokemonsTypes {
  SET_POKEMONS = "SET_POKEMON",
  IS_LOADING = "IS_LOADING",
  IS_START_INFINITE_SCROLL = "IS_START_INFINITE_SCROLL",
  ADD_NEXT_PAGE = "ADD_NEXT_PAGE",
}

export interface IShortInformationPokemon {
  id: number | string;
  name: string;
  types: string[];
  img_front: string;
}
export interface IPokemonsState {
  readonly pokemons: IShortInformationPokemon[];
  readonly addPage: string;
  readonly loading: boolean;
  readonly isStartInfiniteScroll: boolean;
}
