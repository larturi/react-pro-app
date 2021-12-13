import { lazy, LazyExoticComponent } from 'react';
import { NoLazyPage } from '../01-lazyload/pages/NoLazyPage';

type JSXComponent = () => JSX.Element;
 
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Dashboard',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyPage,
        name: 'NoLazy',
    },

]