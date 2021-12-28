import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
 
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Shopping = lazy(() => import(/* webpackChunkName: "Shopping" */ '../02-component-patterns/pages/ShoppingPage'));
const About = lazy(() => import(/* webpackChunkName: "About" */ '../02-component-patterns/pages/AboutPage'));
const User = lazy(() => import(/* webpackChunkName: "User" */ '../02-component-patterns/pages/UserPage'));

export const routes: Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: Shopping,
        name: 'Shopping',
    },
    {
        to: '/about',
        path: 'about',
        Component: About,
        name: 'About',
    },
    {
        to: '/users',
        path: 'users',
        Component: User,
        name: 'User',
    },

]