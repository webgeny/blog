import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'widgets/not-found';

export enum AppRoutes {
    main = 'main',
    about = 'about',
    notFound = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.about]: '/about',
    // last
    [AppRoutes.notFound]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.about]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.notFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
