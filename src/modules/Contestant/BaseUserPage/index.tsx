import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import {ContestPage} from 'modules/Contestant/ContestPage';
import Logo from 'components/core/Logo';
import UserLayout from 'components/layout/UserLayout';
import { UserContext } from 'context';
import { useContext } from 'react';
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
        path: '/contestant',
        exact: true,
        component: HomePage
    },
    {
        label: 'Home',
        path: '/contestant',
        exact: true,
        component: HomePage
    },
    {
        label: 'Contest',
        path: '/contestant/contest/',
        exact: false,
        component: ContestPage
    },
];
export default function BaseUserPage() {
    const { getIsAuthenticated } = useContext(UserContext);
    let isAuthen = getIsAuthenticated();
    const headerRouter:JSX.Element = (
        <Switch>
            {
                routes.map(route => <Route key={route.path} {...route}></Route>)
            }
        </Switch>
    );
    console.log(isAuthen);
    if (!isAuthen)
        return <Redirect to='/login'></Redirect>;
    return <UserLayout headerRoutes={routes} headerRouter={headerRouter}></UserLayout>;
}