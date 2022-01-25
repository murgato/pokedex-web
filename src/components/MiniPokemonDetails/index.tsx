import React from "react";
import "../../css/MiniPokemonDetails.css";
import {
  ContainerTypes,
  Container,
  ContainerInfo,
  ContainerName,
  Glass,
  Pokeball,
  ContainerImage,
  ImgPokemon,
} from "../../styled-components/MiniPokemonDetails";
import { colorsTypes } from "../../util/color/colorsTypes";
import Type from "../Type";

interface Props {
  name: string;
  backgroundColor: string;
  types: [];
  img: string;
  img_shiny: string;
}

const MiniPokemonDetails = ({
  name,
  backgroundColor,
  types,
  img,
  img_shiny,
}: Props) => {
  return (
    <Container
      isGrandient={colorsTypes[backgroundColor].isGrandient}
      backgroundColor={colorsTypes[backgroundColor].colors}
      className="miniPokemonDetails"
    >
      <Glass>
        <Pokeball>
          <ContainerInfo>
            <ContainerImage>
              <ImgPokemon src={img} />
            </ContainerImage>
            <ContainerName>{name}</ContainerName>
            <ContainerTypes>
              {types?.map((type: string, index: number) => {
                return (
                  <div key={index}>
                    <Type type={type} colorInfo={colorsTypes} />
                  </div>
                );
              })}
            </ContainerTypes>
          </ContainerInfo>
        </Pokeball>
      </Glass>
    </Container>
  );
};

export default MiniPokemonDetails;
