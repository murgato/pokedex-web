export enum PokemonTypes {
  SET_NAME_POKEMON = "SET_NAME_POKEMON",
  SET_INFORMATION_BUTTON = "SET_INFORMATION_BUTTON",
  SET_POKEMON = "SET_POKEMON",
  SET_IS_SHINY = "SET_IS_SHINY",
  SET_ABILITIES = "SET_ABILITIES",
}

export interface IInformationButtom {
  previousPokemonId: string | number;
  previousPokemonName: string;
  nextPokemonId: string | number;
  nextPokemonName: string;
}

export interface IPokemon {
  id: string | number;
  name: string;
  img: IImg;
  selectVarieties: ISelectVarieties[];
  varietie: string;
  flavor: string;
  stats: any[];
  types: string[];
  abilities: IAbility[];
}
export interface IAbility {
  name: string;
  flavor: string;
}
interface IImg {
  front_default: string;
  front_shiny: string;
}

interface ISelectVarieties {
  value: string | number;
  label: string;
}

export interface IPokemonState {
  readonly name: string;
  readonly isShiny: boolean;
  readonly pokemon: IPokemon;
  readonly informationButton: IInformationButtom;
}
