import { Theme, useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/classnames/classnames';
import { Button, ThemeButton } from 'shared/ui/button/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.clear}
            className={classNames(cls.themeSwithcer, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}