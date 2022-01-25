import { create } from "apisauce";

// define the api
export const api = create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    Accept: "application/json",
  },
});
