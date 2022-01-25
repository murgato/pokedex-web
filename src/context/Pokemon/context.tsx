import { useState } from "react";
import { createContext } from "react";

type PokemonType = {};

type PropsPokemonContext = {
  state: PokemonType;
  setState: React.Dispatch<React.SetStateAction<PokemonType>>;
};

const DEFAULT_VALUE = {
  state: {},
  setState: () => {},
};

const PokemonContext = createContext<PropsPokemonContext>(DEFAULT_VALUE);

const PokemonContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <PokemonContext.Provider value={{ state, setState }}>
      {children}
    </PokemonContext.Provider>
  );
};
export { PokemonContextProvider };
export default PokemonContext;
