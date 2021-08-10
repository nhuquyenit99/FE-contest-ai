import { Module } from 'core';
import AdminPage from './Admin';
import BaseUserPage from './Contestant/BaseUserPage';
import LoginPage from './Login/index';
import { HomePage } from './Home';
import { DetailPage } from './Home/pages/detail-page';
import { EditContestPage, OrganizerHomePage, ProblemDetail } from './Organizer';
type ModuleRoute = {
    path: string,
    exact: boolean,
    component: () => JSX.Element
};

type ModuleRoutes = ModuleRoute[];
const routes: ModuleRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage, 
    },
    {
        path: '/detail/:id',
        exact: true,
        component: DetailPage, 
    },
    {
        path: '/admin',
        exact: false,
        component: AdminPage, 
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,  
    },
    {
        path: '/login/:type',
        exact: true,
        component: LoginPage,  
    },
    {
        path: '/contestant',
        exact: false,
        component: BaseUserPage,
    },
    {
        path: '/organizer',
        exact: true,
        component: OrganizerHomePage,
    },
    {
        path: '/organizer/detail/:id',
        exact: true,
        component: EditContestPage,
    },
    {
        path:'/organizer/problem/:id',
        exact: true,
        component: ProblemDetail
    }
];
export function setup(module: Module) {
    console.log('Setup chat room');
    routes.forEach(route => module.route(route));
}
