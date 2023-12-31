import DisallowAuthenticated from '@app/components/layout/DisallowAuthenticated';
import RootLayout from '@app/components/layout/RootLayout';
import HomePage from '@app/pages/HomePage';
import LogInPage from '@app/pages/LogInPage';
import RegisterPage from '@app/pages/RegisterPage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const appRoutes: RouteObject[] = [
    {
        path: '',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: HomePage,
            },
            {
                path: '/log-in',
                Component: DisallowAuthenticated,
                children: [
                    {
                        index: true,
                        Component: LogInPage,
                    },
                ],
            },
            {
                path: '/register',
                Component: DisallowAuthenticated,
                children: [
                    {
                        index: true,
                        Component: RegisterPage,
                    },
                ],
            },
        ],
    },
];
export const router = createBrowserRouter(appRoutes, {
    basename: process.env.REACT_APP_BASENAME,
});
