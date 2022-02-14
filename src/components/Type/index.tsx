import { ContainerType } from "../../styled-components/MiniPokemonDetails";
import { colorsType } from "../../types/colors";
interface Props {
  type: string;
  colorInfo: {
    [key: string]: colorsType;
  };
  className?: string;
}
const Type = ({ type, colorInfo, className }: Props) => {
  return (
    <ContainerType
      className={className}
      isGrandient={colorInfo[type].isGrandient}
      backgroundColor={colorInfo[type].colors}
    >
      {type}
    </ContainerType>
  );
};

export default Type;
