import { useContext } from "react";
import { ThemeProviderContext } from "@/contexts/themeProviderContext";

export const useThemeProviderContext = () => {
	const context = useContext(ThemeProviderContext);
	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
