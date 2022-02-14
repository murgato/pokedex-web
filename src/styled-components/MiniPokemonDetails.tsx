import { Spinner } from "react-bootstrap";
import styled from "styled-components";

interface PropsContainer {
  isGrandient?: boolean;
  backgroundColor: string;
  width?: number;
  height?: number;
}

export const Container = styled.div<PropsContainer>`
  height: ${(props) => (props.height ? `${props.height * 0.45}px` : "42vh")};
  width: 259.2px;
  margin-bottom: 20px;
  border-radius: 20px;
  ${(props) =>
    props.isGrandient
      ? `background-image: linear-gradient(to top, ${props.backgroundColor})`
      : `background-color: ${props.backgroundColor}`};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Glass = styled.div`
  height: 42vh;
  width: 100%;
  border-radius: 20px;
  background-image: url(https://raw.githubusercontent.com/carlosdancr/pokedex/e9bbf1714260644d07590a8758bd7ea9fe3972cc/img/bg_pokedex.svg);
`;

export const Pokeball = styled.div`
  height: 42vh;
  width: 100%;
  border-radius: 20px;
  background-image: url(https://raw.githubusercontent.com/carlosdancr/pokedex/e9bbf1714260644d07590a8758bd7ea9fe3972cc/img/pokeball.svg);
  background-position: top right;
  background-repeat: no-repeat;
  background-position: 10vh -3vw;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 20px;
}`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 16 vh;
  width: 14vw;
  padding: 14px 16px 0px 18px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const ContainerStat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const ContainerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;
  text-transform: capitalize;
`;
export const ContainerImage = styled.div``;

export const ImgPokemon = styled.img`
  height: 14rem;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
export const ContainerTypes = styled.div`
  display: flex;
`;

export const ContainerType = styled.div<PropsContainer>`
  ${(props) =>
    props.isGrandient
      ? `background-image: linear-gradient(to top, ${props.backgroundColor})`
      : `background-color: ${props.backgroundColor}`};
  padding: 4px;
  border-radius: 4px;
  margin-right: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: white;
  min-width: 63px;
  border: 1px solid black;
  text-transform: capitalize;
`;

export const SpinnerLoading = styled(Spinner)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
