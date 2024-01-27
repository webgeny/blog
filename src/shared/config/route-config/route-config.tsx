import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import {RouteProps} from "react-router-dom";


export enum AppRoutes {
    main = 'main',
    about = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.about]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.about]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
}