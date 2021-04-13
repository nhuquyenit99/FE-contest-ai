import { Module } from '../core';
import { 
    HomePage, 
} from './pages';

export function setup(module: Module) {
    console.log('Setup chat room');
    module.route({
        path: '/',
        exact: true,
        component: HomePage,
    });
}
