import React from 'react';
// import mouth from '../images/mouth.png';
import './style/Login.css';


function Login() {
    return(
        <div className='login-container'>
            <div className='login-back-color'>

                <div className='login-header'>
                    <button className='login-back-page'>voltar</button>
                    <span>Não tem conta?</span>
                    <span>Cadastre-se</span>
                </div>

                <h1 className='login-title' >Acesse seus restaurantes prediletos</h1>
                {/* <img src={ mouth } alt="" /> */}

                <form className='login-form'>
                    <input className='login-input-email' type="text" placeholder="Email" />
                    <input className='login-input-password' type="password" placeholder="Senha" />
                    <button className='login-button-submit'>Entrar</button>
                    <span>Esqueci minha senha</span>
                </form>

            </div>
        </div>
    );
}

export default Login;
