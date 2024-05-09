import { Theme } from "@/types/general/themeTypes";

export enum ThemeConstants {
    Dark = "dark",
    Light = "light",
    System = "system"
}

export type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

export const ThemeInitialState: ThemeProviderState = {
	theme: ThemeConstants.System,
	setTheme: () => null,
};