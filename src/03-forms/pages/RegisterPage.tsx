import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { onChange, formData, name, email, password1, password2 } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });
 
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>RegisterPage</h1>

            <form autoComplete="off" noValidate onSubmit={onSubmit}>
                <input 
                    name='name'
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={ onChange }
                />
                <input 
                    name='email'
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={ onChange }
                />
                <input 
                    name='password1'
                    type="password" 
                    placeholder="Password"
                    value={password1}
                    onChange={ onChange }
                />
                <input 
                    name='password2'
                    type="password2" 
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={ onChange }
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
