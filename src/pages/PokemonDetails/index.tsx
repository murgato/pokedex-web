import React from "react";
import { useLocation } from "react-router-dom";

const PokemonDetails = (): JSX.Element => {
  let location = useLocation();
  return <div>{location?.pathname.substring(16)}</div>;
};

export default PokemonDetails;
