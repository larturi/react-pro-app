import { LazyExoticComponent } from 'react';
import { 
    FormikAbstraction, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage, 
    RegisterPage 
} from '../03-forms/pages';

type JSXComponent = () => JSX.Element;
 
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register',
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Component: FormikBasicPage,
        name: 'Formik Basic',
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: FormikYupPage,
        name: 'Formik Yup',
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: FormikComponents,
        name: 'Formik Components',
    },
    {
        to: '/formik-abstraction',
        path: 'formik-abstraction',
        Component: FormikAbstraction,
        name: 'Formik Abstraction',
    },
   
]