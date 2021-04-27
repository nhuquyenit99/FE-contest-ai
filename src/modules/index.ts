import { Module } from 'core';
import AdminPage from './pages/AdminPage';
import BaseUserPage from './pages/ContestantPage/BaseUserPage';
import LoginPage from './pages/LoginPage/index';
type ModuleRoute = {
    path: string,
    exact: boolean,
    component: () => JSX.Element
};

type ModuleRoutes = ModuleRoute[];
const routes: ModuleRoutes = [
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
        path: '/contestant',
        exact: false,
        component: BaseUserPage,
    },
];
export function setup(module: Module) {
    console.log('Setup chat room');
    routes.forEach(route => module.route(route));
}
