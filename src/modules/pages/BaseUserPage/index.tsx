import BaseLayout from 'components/layout/BaseLayout';
import { Route, Switch } from 'react-router';
import { HomePage } from '../home';
import LoginPage from '../LoginPage';
import Logo from '../../../components/core/Logo';

const routes = [
    {
        label: 'Logo',
        path: '/',
        component: Logo
    },
    {
        label: 'Home',
        path: '/',
        component: HomePage
    },
    {
        label: 'Login',
        path: '/login',
        component: LoginPage
    },
];
export default function BaseUserPage() {
    const router = (
        <Switch>
            {
                routes.map(route => <Route key={route.path} {...route}></Route>)
            }
        </Switch>
    );
    const childProps = {
        router: router,
        headerRoutes: routes
    };
    console.log(childProps);
    return <BaseLayout {...childProps}></BaseLayout>;
}