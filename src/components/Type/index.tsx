import { ContainerType } from "../../styled-components/MiniPokemonDetails";
import { colorsType } from "../../types/colors";
interface Props {
  type: string;
  colorInfo: {
    [key: string]: colorsType;
  };
}
const Type = ({ type, colorInfo }: Props) => {
  return (
    <ContainerType
      isGrandient={colorInfo[type].isGrandient}
      backgroundColor={colorInfo[type].colors}
    >
      {type}
    </ContainerType>
  );
};

export default Type;
