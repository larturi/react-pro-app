import { LazyExoticComponent } from 'react';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { About } from '../components/About';
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
        to: '/users',
        path: 'users',
        Component: Users,
        name: 'Users',
    },
   
]