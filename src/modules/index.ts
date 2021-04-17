import { Module } from '../core';
import LanguagePage from './pages/AdminPage/LanguagePage/index';
import {
    HomePage, 
} from './pages';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     component: UserPage,
    // },
    {
        path: '/admin',
        exact: false,
        component: AdminPage, 
    },
];
export function setup(module: Module) {
    console.log('Setup chat room');
    routes.forEach(route => module.route(route));
}
