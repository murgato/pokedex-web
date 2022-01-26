import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
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
  className?: string;
}

const MiniPokemonDetails = ({
  name,
  backgroundColor,
  types,
  img,
  className,
}: Props) => {
  const navigate = useNavigate();

  const goToPageDetails = () => {
    navigate(`PokemonDetails/${name}`);
  };

  return (
    <Container
      isGrandient={colorsTypes[backgroundColor].isGrandient}
      backgroundColor={colorsTypes[backgroundColor].colors}
      className={className + " miniPokemonDetails"}
      onClick={goToPageDetails}
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

export default memo(MiniPokemonDetails);
