import { Reducer } from "redux";
import { IPokemonState, PokemonTypes } from "./types";

const INITIAL_STATE: IPokemonState = {
  name: "",
  isShiny: false,
  pokemon: {
    id: "",
    name: "",
    img: {
      front_default: "",
      front_shiny: "",
    },
    selectVarieties: [],
    varietie: "",
    flavor: "",
    stats: [],
    types: [],
    abilities: [],
  },

  informationButton: {
    previousPokemonId: "",
    previousPokemonName: "",
    nextPokemonId: "",
    nextPokemonName: "",
  },
};

const reducer: Reducer<IPokemonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonTypes.SET_NAME_POKEMON:
      return { ...state, name: action.payload.name };

    case PokemonTypes.SET_INFORMATION_BUTTON:
      return { ...state, informationButton: action.payload.informationButton };

    case PokemonTypes.SET_POKEMON:
      return { ...state, pokemon: action.payload.pokemon };

    case PokemonTypes.SET_IS_SHINY:
      return { ...state, isShiny: action.payload.isShiny };

    case PokemonTypes.SET_ABILITIES:
      return { ...state, abilities: action.payload.abilities };

    default:
      return state;
  }
};

export default reducer;
