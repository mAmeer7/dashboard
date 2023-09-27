import { createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";

export const token = (mode) => ({
  ...(mode === "dark"
    ? {
        indigo: {
          100: "#d0dae1",
          200: "#a0b6c4",
          300: "#7191a6",
          400: "#416d89",
          500: "#12486b",
          600: "#0e3a56",
          700: "#0b2b40",
          800: "#071d2b",
          900: "#040e15",
        },
        blue: {
          100: "#d9e9ea",
          200: "#b3d3d5",
          300: "#8dbdc1",
          400: "#67a7ac",
          500: "#419197",
          600: "#347479",
          700: "#27575b",
          800: "#1a3a3c",
          900: "#0d1d1e",
        },
      }
    : {
        white: {
          100: "#fcfcfc",
          200: "#f9f9f9",
          300: "#f6f6f6",
          400: "#f3f3f3",
          500: "#f0f0f0",
          600: "#c0c0c0",
          700: "#909090",
          800: "#606060",
          900: "#303030",
        },
        purple: {
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#b8b8b8",
          400: "#a0a0a0",
          500: "#888888",
          600: "#6d6d6d",
          700: "#525252",
          800: "#363636",
          900: "#1b1b1b",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = token(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.indigo[600],
            },
            secondary: {
              main: colors.blue[500],
            },
            background: {
              default: colors.indigo[600],
            },
          }
        : {
            primary: {
              main: colors.purple[200],
            },
            secondary: {
              main: colors.white[500],
            },
            neutrals: {
              dark: colors.purple[200],
              main: colors.purple[200],
              light: colors.purple[100],
            },
            background: {
              default: colors.purple[200],
            },
          }),
    },
  };
};

//create context for mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => 
        setMode((prev) => (prev === "light" ? "dark" : "light"))
        
      
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
