import { PokemonsContextProvider } from "./Pokemons/context";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <>
      <PokemonsContextProvider>{children}</PokemonsContextProvider>
    </>
  );
};

export default GlobalContext;
