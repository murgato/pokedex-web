import axios from "axios";
import { api } from "../util/api/api";

export const getAllPokemon = async () => {
  let response: any = await api.get("pokemon/?offset=0&limit=24");
  let allPokmemonswithTypes: any[] = [];

  response.data.results?.forEach(async (result: any) => {
    let pokemon = {};
    let response = await axios.get(result.url).catch((response) => {
      return response;
    });
    pokemon = {
      id: response.data.id,
      name: response.data.name,
      types: response.data.types?.map((type: any) => type.type.name),
      img_front: response.data.sprites.other.home.front_default,
      img_front_shiny: response.data.sprites.other.home.front_shiny,
    };
    allPokmemonswithTypes.push(pokemon);
  });

  let auxPokemons = allPokmemonswithTypes.sort((a, b) => b - a);
  let returnPokemon = {
    nextPage: response.data.next,
    pokemon: auxPokemons,
  };
  return returnPokemon;
};

export const getNextPage = async (nextPage: string, oldPokemons: any) => {
  let response: any = await axios.get(nextPage).catch((response: any) => {
    return response;
  });
  let allPokmemonswithTypes: any[] = [];

  response.data.results?.forEach(async (result: any, index: number) => {
    let pokemon = {};
    let response = await axios.get(result.url).catch((response) => {
      return response;
    });
    pokemon = {
      orde: response.data.order,
      name: response.data.name,
      types: response.data.types?.map((type: any) => type.type.name),
      img_front: response.data.sprites.other.home.front_default,
      img_front_shiny: response.data.sprites.other.home.front_shiny,
    };
    allPokmemonswithTypes[index] = pokemon;
  });
  let auxPokemons = allPokmemonswithTypes.sort((a, b) => b - a);
  console.log(auxPokemons);
  let newPokemon = oldPokemons.concat(auxPokemons);
  return { pokemon: newPokemon, nextPage: response.data.next };
};
