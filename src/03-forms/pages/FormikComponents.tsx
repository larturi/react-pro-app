import '../styles/styles.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .required('Required')
                        .notOneOf(['it-junior'], 'This option is not available'),
                })}
            >
                {
                    formik => (
                    
                        <Form>
            
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="span" />
            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" placeholder="Last Name"/>
                            <ErrorMessage name="lastName" component="span" />
            
                            <label htmlFor="email">Email </label>
                            <Field name="email" type="text" placeholder="Email"/>
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type </label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-junior">It Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                Terms and conditions
                                <Field name="terms" type="checkbox" />
                            </label>
                            <ErrorMessage name="terms" component="span" />
            
                            <button type='submit'>Submit</button>
            
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
