import { ReactNode, useEffect, useState } from "react";
import CharacterContext from "./CharacterContext";

type Props = {
    children: ReactNode;
};

export function CharacterProvider({ children }: Props) {
    const [cookies, setCookies] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => setCookies(["Chocolate Chip", "Sugar", "Oatmeal", "Gingerbread"]), []);

    return (
        <CharacterContext.Provider value={{ cookies, searchValue, setSearchValue }}>
            {children}
        </CharacterContext.Provider>
    );
};