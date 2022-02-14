import { api } from "../util/api/api";
import * as action from "../store/pokemon/actions";
import { IInformationButtom, IPokemon } from "../store/pokemon/types";
export const getPokemons = async () => {
  let response: any = await api.get("pokemon/?offset=0&limit=25");
  return response.data;
};

export const getPreviousAndNextPokemons = async (name: string) => {
  let response: any = await api.get("pokemon/?offset=0&limit=898");
  let data: any[] = response.data.results;
  let index = data.findIndex((pokemon) => pokemon.name === name);
  let previousPokemon = await getPokemonByName(
    data[index === 0 ? data.length - 1 : index - 1].name
  );
  let nextPokemon = await getPokemonByName(
    data[index === data.length - 1 ? 0 : index + 1].name
  );
  let informationButton: IInformationButtom = {
    previousPokemonId: previousPokemon.id,
    previousPokemonName: previousPokemon.name,
    nextPokemonId: nextPokemon.id,
    nextPokemonName: nextPokemon.name,
  };
  action.setPreviousAndNextPokemon(informationButton);
};

export const getNextPage = async (url: string) => {
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

export const getPokemonByName = async (name?: string) => {
  if (name === "") return;
  let response: any = await api.get(`pokemon/${name}`);
  return response.data;
};

export const getInformationAboutPokemon = async (name: string) => {
  const responsePokemon: any = await api.get(`pokemon/${name}`);
  const responseSpecies: any = await api.get(
    `pokemon-species/${responsePokemon.data.id}`
  );

  let varieties = responseSpecies.data.varieties.map((varietie: any) => {
    return { value: varietie.pokemon.name, label: varietie.pokemon.name };
  });
  let flavor = responseSpecies.data.flavor_text_entries.find((flavor: any) =>
    flavor.flavor_text !== null ? flavor.flavor_text : ""
  );

  let pokemon: IPokemon = {
    id: responsePokemon.data.id,
    name: responsePokemon.data.name,
    img: {
      front_default: responsePokemon.data.sprites.other.home.front_default,
      front_shiny: responsePokemon.data.sprites.other.home.front_shiny,
    },
    selectVarieties: varieties,
    varietie: responsePokemon.data.name,
    flavor: flavor.flavor_text,
    stats: responsePokemon.data.stats,
    types: responsePokemon.data.types?.map((type: any) => type.type.name),
    abilities: responsePokemon.data.abilities?.map((ability: any) => {
      return { name: ability.ability?.name, flavor: "" };
    }),
  };
  action.setPokemon(pokemon);
};

export const getVarieteInfo = async (name: string, info: IPokemon) => {
  const response: any = await api.get(`pokemon/${name}`);
  let pokemon: IPokemon = {
    ...info,
    img: {
      front_default: response.data.sprites.other.home.front_default,
      front_shiny: response.data.sprites.other.home.front_shiny,
    },
    varietie: response.data.name,
    stats: response.data.stats,
    types: response.data.types?.map((type: any) => type.type.name),
    abilities: response.data.abilities?.map((ability: any) => {
      return { name: ability.ability?.name, flavor: "" };
    }),
  };
  action.setPokemon(pokemon);
};

export const getFlavorAbility = async (name: string, pokemon: IPokemon) => {
  const response: any = await api.get(`ability/${name}`);
  let objPokemon: IPokemon = JSON.parse(JSON.stringify(pokemon));
  objPokemon.abilities.forEach((ability) => {
    if (name === ability.name) {
      let auxFlavor = response.data?.flavor_text_entries?.find(
        (flavor: any) => flavor.language?.name === "en"
      );
      ability.flavor = auxFlavor.flavor_text;
    }
  });
  
  action.setPokemon(objPokemon);
};
