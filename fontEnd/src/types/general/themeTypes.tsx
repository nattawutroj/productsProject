import { ThemeConstants } from "@/constants/general/themeConstants";

export type Theme = ThemeConstants.Dark | ThemeConstants.Light | ThemeConstants.System;

export type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};