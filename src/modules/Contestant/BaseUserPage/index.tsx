import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from '../HomePage';
import UserLayout from 'components/layout/UserLayout';
import { readCookie } from 'utils/cookie';
import AccountInfo from '../AccountInfo';
import { ContestPage } from '../ContestPage';

type HeaderRoute = {
    label?: string,
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
            <Route key={'/contestant/user'} path="/contestant/user/:userId" component={AccountInfo} />
        </Switch>
    );
    if (!token)
        return <Redirect to='/login/contestant'></Redirect>;
    
    let headerRoutes = routes.filter(route => route.label != null);
    return <UserLayout headerRoutes={headerRoutes} headerRouter={headerRouter}></UserLayout>;
}