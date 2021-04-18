import { Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import Logo from 'components/core/Logo';
import { ContestPage } from '../ContestPage';
import UserLayout from 'components/layout/UserLayout';
import LoginPage from '../LoginPage/index';

const routes = [
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
    const headerRouter = (
        <Switch>
            {
                routes.map(route => <Route key={route.path} {...route}></Route>)
            }
        </Switch>
    );
    return <UserLayout headerRoutes={routes} headerRouter={headerRouter}></UserLayout>;
}