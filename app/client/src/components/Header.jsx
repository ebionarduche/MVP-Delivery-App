import React from 'react';
import { useHistory } from 'react-router-dom';
import mouth from '../images/mouth.png';
import user from '../images/icons/user.svg';
import logOut from '../images/icons/log-out.svg';
import shoppingBag from '../images/icons/shopping-bag.svg';
import { useMediaQuery } from 'react-responsive';
import './style/Header.css';
import SearchBar from './SearchBar';



function Header() {
    const history = useHistory();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleLogOut = () => {
        localStorage.clear();
        history.push('/');
    };

    
    return (
        <div className='header-container'>
            {isMobile ? (
                <section className='header-container-mobile'>
                    
                    <div>
                        <p>{`Olá ${'Usuário'}, você está neste endereço?`}</p>
                        <span>{`${'Endereço indisponível'}`}</span>
                    </div>
                </section>
            ) : (
                <>
                    <img className='header-img' src={mouth} alt="" />
                    <SearchBar />
                    <section>
                        <p>{`Olá ${name || 'Usuário'}, você está neste endereço?`}</p>
                        <span>{`${name || 'Endereço indisponível'}`}</span>
                    </section>

                    <img src={user} alt="" width='30px' />

                    <button
                        onClick={handleLogOut}
                    >
                        <img src={logOut} alt="" width='30px' />
                    </button>

                    <img src={shoppingBag} alt="" width='30px' />
                </>
            )}
        </div>
    );
}

export default Header;
