import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useThemeProviderContext } from "@/hooks/general/useThemeProviderContext";
import { ThemeConstants } from "@/constants/general/themeConstants";


export function ModeToggle() {
	const { setTheme } = useThemeProviderContext();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme(ThemeConstants.Light)}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme(ThemeConstants.Dark)}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme(ThemeConstants.System)}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
