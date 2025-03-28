import { createContext, useContext } from "react";

type CharacterContextType = {
  cookies: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return context;
};

export default CharacterContext;