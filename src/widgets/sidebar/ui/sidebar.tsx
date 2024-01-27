import { useState } from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import cls from './sidebar.module.scss';
import { LangSwitcher } from 'shared/ui/lang-switcher/ui/lang-switcher';


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}