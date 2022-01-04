import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MyCheckbox, MySelect } from '../components';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

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

                            <MyTextInput 
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="Enter your first name"
                            />
                            <MyTextInput 
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Enter your last name"
                            />
                            <MyTextInput 
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />
            
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-junior">It Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms and conditions" name="terms" />
            
                            <button type='submit'>Submit</button>
            
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
