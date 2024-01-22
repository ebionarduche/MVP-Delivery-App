import React, { useState }from 'react';
import './style/Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Login() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = ({ target: { value, name } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', formData);
            if (response.status === 200) {
                localStorage.setItem('userData', JSON.stringify(response.data));
                history.push('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className='login-container'>
            <div className='login-back-color'>

                <div className='login-header'>
                    <button className='login-back-page'>voltar</button>
                    <span>Não tem conta?</span>
                    <span>Cadastre-se</span>
                </div>

                <h1 className='login-title' >Acesse seus restaurantes prediletos</h1>

                <form className='login-form'>
                    <input 
                        className='login-input-email'
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}    
                    />
                    <input 
                        className='login-input-password' 
                        type="password" 
                        name='password'
                        placeholder="Senha" 
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button 
                        type='button' 
                        className='login-button-submit'
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>
                    <span>Esqueci minha senha</span>
                </form>
            </div>
        </div>
    );
}

export default Login;
