import { Module } from '../core';
import { 
    ContestPage,
    HomePage, 
} from './pages';

export function setup(module: Module) {
    console.log('Setup chat room');
    module.route({
        path: '/',
        exact: true,
        component: HomePage,
    });
    module.route({
        path: '/contest',
        exact: true,
        component: ContestPage,
    });
}
