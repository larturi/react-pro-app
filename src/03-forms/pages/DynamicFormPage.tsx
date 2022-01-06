import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';


const initialValues: {[x: string]: any} = {};
const requiredFields:  {[x: string]: any} = {};

for (const input of formJson) {
    initialValues[input.name] = input.value || '';
    
    if(!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Campo requerido');
        }
        if(rule.type === 'minLength') {
            schema = schema.min((rule as any).value, `Minimo ${(rule as any).value} caracteres`);
        }
        if(rule.type === 'email') {
            schema = schema.email('Email invalido');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>DynamicFormPage</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                { (formik) => (
                    <Form>

                        {
                            formJson.map( ({type, name, placeholder, label, options }) => {

                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return (
                                        <MyTextInput 
                                            key={name}
                                            type={(type as any)} 
                                            name={name} 
                                            label={label}  
                                            placeholder={placeholder}
                                        />
                                    )
                                } else if(type === 'select' ) {
                                    return (
                                        <MySelect 
                                            key={name}
                                            name={name} 
                                            label={label}  
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map( (option) => (
                                                    <option key={option.id} value={option.id}>{option.label}</option>
                                                ))
                                            }
                                        </MySelect>
                                    )
                                } else {
                                    return <span>Type {type} no soportado</span>
                                }

                                
                                
                            }
                        )}
                        
                        <button type='submit'>Submit</button>   
                    </Form>
                ) }
            </Formik>
        </div>
    )
}
