import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import {ContestPage} from 'modules/Contestant/ContestPage';
import UserLayout from 'components/layout/UserLayout';
import { readCookie } from 'utils/cookie';
import AccountInfo from '../AccountInfo';

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
];
export default function BaseUserPage() {
    const token = readCookie('access_token');
    const headerRouter:JSX.Element = (
        <Switch>
            {routes.map(route => <Route key={route.path} {...route}></Route>)}
            <Route key={'/contestant/user'} path="/contestant/user/:userId" component={AccountInfo} />
        </Switch>
    );
    if (!token)
        return <Redirect to='/login/contestant'></Redirect>;
    return <UserLayout headerRoutes={routes} headerRouter={headerRouter}></UserLayout>;
}