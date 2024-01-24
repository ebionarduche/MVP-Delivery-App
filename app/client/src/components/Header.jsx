import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import mouth from '../images/mouth.png';
import user from '../images/icons/user.svg';
import logOut from '../images/icons/log-out.svg';
import shoppingBag from '../images/icons/shopping-bag.svg';
import { useMediaQuery } from 'react-responsive';
import './style/Header.css';
import SearchBar from './SearchBar';
import { jwtDecode } from 'jwt-decode'; 

function Header() {
    const history = useHistory();
    const isMobile = useMediaQuery({ maxWidth: 768 });

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

    return (
        <div className='header-container'>
            {isMobile ? (
                <section className='header-container-mobile'>
                    <div>
                        <p>{`Olá ${userData ? userData.userName : 'Usuário'}, você está neste endereço?`}</p>
                        <span>{`${userData ? userData.address : 'Endereço indisponível'}`}</span>
                    </div>
                </section>
            ) : (
                <>
                    <img className='header-img' src={mouth} alt="" />
                    <SearchBar />
                    <section>
                        <p>{`Olá ${userData ? userData.userName : 'Usuário'}, você está neste endereço?`}</p>
                        <span>{`${userData ? userData.address : 'Endereço indisponível'}`}</span>
                    </section>
                    <button className='header-button'>
                        <img src={user} alt="" width='30px' />
                    </button>

                    <button
                        className='header-button'
                        onClick={handleLogOut}
                    >
                        <img src={logOut} alt="" width='30px' />
                    </button>

                    <img className='header-button-img' src={shoppingBag} alt="" width='30px' />
                </>
            )}
        </div>
    );
}

export default Header;
