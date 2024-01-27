import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import cls from './app-link.module.scss';

export enum AppLinkTheme {
    primary = 'primary',
    secondary = 'secondary',
    red = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.primary,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
