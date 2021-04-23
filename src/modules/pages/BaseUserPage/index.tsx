import { Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import Logo from 'components/core/Logo';
import { ContestPage } from '../ContestPage';
import UserLayout from 'components/layout/UserLayout';
import LoginPage from '../LoginPage/index';
type HeaderRoute = {
    label: string,
    path: string,
    exact: boolean,
    component: any
}
export type HeaderRoutes = HeaderRoute[];

const routes:HeaderRoutes = [
    {
        label: 'Logo',
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        label: 'Home',
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        label: 'Login',
        path: '/login',
        exact: false,
        component: LoginPage
    },
    {
        label: 'Contest',
        path: '/contest',
        exact: true,
        component: ContestPage
    },
];
export default function BaseUserPage() {
    const headerRouter:JSX.Element = (
        <Switch>
            {
                routes.map(route => <Route key={route.path} {...route}></Route>)
            }
        </Switch>
    );
    return <UserLayout headerRoutes={routes} headerRouter={headerRouter}></UserLayout>;
}