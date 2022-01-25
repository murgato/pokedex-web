import Pokedex from "../pages/Pokedex";
import PokemonDetails from "../pages/PokemonDetails";
import { RouteType } from "../types/routing";

export const routing: RouteType[] = [
  {
    Component: Pokedex,
    path: "/",
  },
  {
    Component: PokemonDetails,
    path: "/PokemonDetails",
  },
];
