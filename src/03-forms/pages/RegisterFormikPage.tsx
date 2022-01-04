import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    const { 
        formData, name, email, password1, password2, 
        onChange, reset, isValidEmail
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });


    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be 2 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password1: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .required('Required'),
                    password2: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                        .required('Required'),
                })}
            >
                {
                    ({ handleReset }) => (
                    
                        <Form>

                            <MyTextInput 
                                label="First Name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                            <MyTextInput 
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <MyTextInput 
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="Enter your password"
                            />
                            <MyTextInput 
                                label="Password Confirm"
                                name="password2"
                                type="password"
                                placeholder="Confirm your password"
                            />
            
                            <button type='submit'>Submit</button>

                            <button type='button' onClick={handleReset}>Restet</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
