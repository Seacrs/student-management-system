import { createContext } from "react";

export interface ThemeContextType {
    theme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);