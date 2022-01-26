import { api } from "../util/api/api";

export const getAllPokemon = async () => {
  let response: any = await api.get("pokemon/?offset=0&limit=24");
  return response.data;
};

export const getNextPage = async (url: string, oldPokemons: any) => {
  let path = "";
  if (url) {
    path = url.substring(26);
  }
  let response: any = await api.get(path);
  return response.data;
};

export const getOnlyPokemon = async (url: string) => {
  let path = "";
  if (url) {
    path = url.substring(26);
  }
  let response: any = await api.get(path);

  return {
    id: response.data.id,
    name: response.data.name,
    types: response.data.types?.map((type: any) => type.type.name),
    img_front: response.data.sprites.other.home.front_default,
    img_front_shiny: response.data.sprites.other.home.front_shiny,
  };
};

export const getAllInformationPokemon = async (url: string) => {
  let path = "";
  if (url) {
    path = url.substring(26);
  }
  let response: any = await api.get(path);

  return {
    id: response.data.id,
    name: response.data.name,
    types: response.data.types?.map((type: any) => type.type.name),
    img_front: response.data.sprites.other.home.front_default,
    img_front_shiny: response.data.sprites.other.home.front_shiny,
  };
};
