import { useContext } from 'react';
import { Theme, ThemeContext, localStorageThemeKey } from './theme-context';


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
        setTheme(newTheme);
        localStorage.setItem(localStorageThemeKey, newTheme);
    }

    return {
        theme,
        toggleTheme
    }
}