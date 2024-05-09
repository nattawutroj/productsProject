import { useEffect, useState } from "react";
import { ThemeConstants } from "@/constants/general/themeConstants";
import { Theme, ThemeProviderProps } from "@/types/general/themeTypes";
import { ThemeProviderContext } from "@/contexts/themeProviderContext";

export function ThemeProvider({
    children,
    defaultTheme = ThemeConstants.System,
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeConstants>(
        () => (localStorage.getItem(storageKey) as ThemeConstants) || defaultTheme,
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(ThemeConstants.Light, ThemeConstants.Dark);

        if (theme === ThemeConstants.System) {
            const systemTheme = window.matchMedia(`(prefers-color-scheme: ${ThemeConstants.Dark})`)
                .matches
                ? ThemeConstants.Dark
                : ThemeConstants.Light;

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}