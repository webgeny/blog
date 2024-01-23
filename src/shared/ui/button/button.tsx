import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import cls from './button.module.scss';

export enum ThemeButton {
    clear = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;


    return (
        <button
            className={classNames(cls.button, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}