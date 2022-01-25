import { useState } from "react";
import { createContext } from "react";

type PokemonsType = {};

type PropsPokemonsContext = {
  state: PokemonsType;
  setState: React.Dispatch<React.SetStateAction<PokemonsType>>;
};

const DEFAULT_VALUE = {
  state: {},
  setState: () => {},
};

const PokemonsContext = createContext<PropsPokemonsContext>(DEFAULT_VALUE);

const PokemonsContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <PokemonsContext.Provider value={{ state, setState }}>
      {children}
    </PokemonsContext.Provider>
  );
};
export { PokemonsContextProvider };
export default PokemonsContext;
