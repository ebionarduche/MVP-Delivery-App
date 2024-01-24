import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import user from '../images/icons/user.svg';
import './style/User.css';
import { jwtDecode } from 'jwt-decode'; 
import { useMediaQuery } from 'react-responsive';

import Header from '../components/Header';
import Footer from '../components/Footer';

function User() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const history = useHistory();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const tokenString = localStorage.getItem('userData');
        
        if (tokenString) {
            try {
                const tokenObject = JSON.parse(tokenString);
                const decodedToken = jwtDecode(tokenObject.token); 
                setUserData(decodedToken);
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    }, []);

    const handleLogOut = () => {
        localStorage.clear();
        history.push('/');
    };
    return(
        <div className='user-container'>
            <Header />
            <div className='user-header'>
                <h1 className='user-title'>Meu perfil</h1>
                <img className='user-img' src={user} alt="" />
            </div>
            <div className='user-info'>
                <div className='user-data'>
                    <h3 className='user-sub-title'>Dados pessoais</h3>
                    <p className='user-text'>{userData ? userData.userName : 'Usuário'}</p>
                    <p className='user-text'>{userData ? userData.email : 'Email'}</p>
                    <p className='user-text'>{userData ? userData.phone : 'Telefone'}</p>
                </div>
                <div className='user-address'>
                    <h3 className='user-sub-title'>Endereço cadastrado</h3>
                    <p className='user-text'>{userData ? userData.address : 'Endereço'}</p>
                </div>
            </div>
            <button className='user-button-exit' onClick={handleLogOut}>Sair</button>
            {isMobile && <Footer />}

        </div>
    );
}


export default User;
