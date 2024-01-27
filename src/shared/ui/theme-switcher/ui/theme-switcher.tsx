import { Theme, useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/classnames/classnames';
import { Button, ThemeButton } from 'shared/ui/button/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

// Есть предлложение добавить это в фичу
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.clear}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
