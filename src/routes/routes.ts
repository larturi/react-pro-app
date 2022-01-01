import { lazy, LazyExoticComponent } from 'react';
import { About } from '../components/About';
import { Home } from '../components/Home';
import { Users } from '../components/Users';

type JSXComponent = () => JSX.Element;
 
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Home',
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
        Component: Users,
        name: 'Users',
    },

]