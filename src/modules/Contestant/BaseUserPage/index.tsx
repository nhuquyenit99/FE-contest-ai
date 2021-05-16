import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import {ContestPage} from 'modules/Contestant/ContestPage';
import UserLayout from 'components/layout/UserLayout';
import { readCookie } from 'utils/cookie';
import { useContext } from 'react';
import { UserContext } from 'context';
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
        path: '/contestant/contest',
        exact: false,
        component: ContestPage
    },
];
export default function BaseUserPage() {
    const token = readCookie('access_token');
    const headerRouter:JSX.Element = (
        <Switch>
            {routes.map(route => <Route key={route.path} {...route}></Route>)}
        </Switch>
    );
    if (!token)
        return <Redirect to='/login/contestant'></Redirect>;
    return <UserLayout headerRoutes={routes} headerRouter={headerRouter}></UserLayout>;
}