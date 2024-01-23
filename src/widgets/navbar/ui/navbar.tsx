import { classNames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.secondary} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.red} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};