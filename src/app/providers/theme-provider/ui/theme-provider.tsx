import {
    FC, ReactNode, useMemo, useState,
} from 'react';
import { Theme, ThemeContext, localStorageThemeKey } from '../lib/theme-context';

const defaultTheme = localStorage.getItem(localStorageThemeKey) as Theme || Theme.light;

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,

    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
