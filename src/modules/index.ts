import { Module } from '../core';
import AdminPage from './pages/AdminPage';
import BaseUserPage from './pages/BaseUserPage';
import LoginPage from './pages/LoginPage/index';
const routes = [
    {
        path: '/',
        exact: true,
        component: BaseUserPage,
    },
    {
        path: '/admin',
        exact: false,
        component: AdminPage, 
    },
    {
        path: '/login',
        exact: false,
        component: LoginPage,
    }
];
export function setup(module: Module) {
    console.log('Setup chat room');
    routes.forEach(route => module.route(route));
}
