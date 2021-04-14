import { Module } from '../core';
import LanguagePage from './pages/AdminPage/LanguagePage/index';
import { 
    ContestPage,
    HomePage, 
} from './pages';

export function setup(module: Module) {
    console.log('Setup chat room');
    module.route({
        path: '/admin',
        exact: true,
        component: HomePage,
    });
    module.route({
        path: '/admin/language',
        exact: true,
        component: LanguagePage,
    });
}
