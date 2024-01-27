import { Suspense } from 'react';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from '../shared/lib/classnames/classnames';
import './styles/index.scss';
import AppRouter from './providers/router/ui/app-router';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
