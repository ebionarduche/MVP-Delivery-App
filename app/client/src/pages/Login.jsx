import React from 'react';
import mouth from '../images/mouth.png';

function Login() {
    return(
        <div className='login-container'>
            <div className='login-header'>
                <button>voltar</button>
                <span>Não tem conta?</span>
                <span>Cadastre-se</span>
            </div>

            <h1>Acesse seus restaurantes prediletos</h1>
            <img src={ mouth } alt="" />

            <div className='login-form'>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
                <span>Esqueci minha senha</span>
            </div>
        </div>
    );
}

export default Login;
