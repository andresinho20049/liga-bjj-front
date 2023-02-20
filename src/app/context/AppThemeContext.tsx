import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../theme";
import usePersistedState from "../hooks/UsePersistedState";
import { beltThemeType } from "../interface";

interface IAppThemeContextData {
    isDark: boolean;
    toggleIsDark: () => void;

    themeName: beltThemeType;
    setThemeName: (themeName: beltThemeType) => void;
}

export const AppThemeContext = createContext({} as IAppThemeContextData);

export const useAppThemeContext = () => {
    return useContext(AppThemeContext);
}

interface IAppThemeProviderProps {
    children: ReactNode
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
    const [isDark, setThemeIsDark] = usePersistedState<boolean>("themeIsDark", false);
    const [themeName, setThemeName] = usePersistedState<beltThemeType>("theme", "White");

    const toggleIsDark = useCallback(() => {
        setThemeIsDark((prev) => !prev);
    }, []);

    const theme = useMemo(() => {

        switch (themeName) {
            case "Black":
                return isDark ? DarkTheme : LightTheme;

            case "White":
                return isDark ? DarkTheme : LightTheme;

            default:
                return isDark ? DarkTheme : LightTheme;
        }

    }, [isDark, themeName]);

    return (
        <AppThemeContext.Provider value={{ isDark , toggleIsDark, themeName, setThemeName }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}