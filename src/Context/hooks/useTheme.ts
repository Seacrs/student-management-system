import { useContext } from "react";
import { ThemeContext } from "./index";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) throw new Error("useTheme must be used within ThemeProvider");

    const { theme, toggleTheme } = context;

    return { theme, toggleTheme };
}