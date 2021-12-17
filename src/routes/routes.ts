import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
 
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Shopping = lazy(() => import(/* webpackChunkName: "Shopping" */ '../02-component-patterns/pages/ShoppingPage'));

export const routes: Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: Shopping,
        name: 'Shopping',
    },

]