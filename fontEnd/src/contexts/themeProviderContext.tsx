import { ThemeInitialState, ThemeProviderState } from "@/constants/general/themeConstants";
import { createContext } from "react";

export const ThemeProviderContext = createContext<ThemeProviderState>(ThemeInitialState);