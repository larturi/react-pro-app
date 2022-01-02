import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { 
        formData, name, email, password1, password2, 
        onChange, reset, isValidEmail
    } = useForm({
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
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                { name.trim().length <= 0 && <span>Campo obligatorio</span> }

                <input 
                    name='email'
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={ onChange }
                    className={`${!isValidEmail(email)  && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Email no es valido</span> }

                <input 
                    name='password1'
                    type="password" 
                    placeholder="Password"
                    value={password1}
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>Campo obligatorio</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener al memos 6 caracteres</span> }

                <input 
                    name='password2'
                    type="password" 
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Campo obligatorio</span> }
                { password1 !== password2 && password2.trim().length > 0 && <span>Las contraseñas deben ser iguales</span> }

                <button type="submit">Create</button>

                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
