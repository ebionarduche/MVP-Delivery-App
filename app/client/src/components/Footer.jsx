import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import homeIcon from '../images/icons/home.svg';
import userIcon from '../images/icons/user.svg';
import searchIcon from '../images/icons/search.svg';
import shoppingBagIcon from '../images/icons/shopping-bag.svg';
import './style/Footer.css';

function Footer() {
    const history = useHistory();

    const [showSearchInput, setShowSearchInput] = useState(false);



    const handleLogOut = () => {
        history.push('/home');
    };


    const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    };
    return (
        <div className='footer-container'>
            <button className='footer-button' type='button'>
                <img className='footer-button-img' onClick={handleLogOut} src={homeIcon} alt="" />
            </button>
            <button className='footer-button' type='button' onClick={handleSearchClick}>
                <img className='footer-button-img' src={searchIcon} alt="" />
            </button>

            <button 
                onClick={() => history.push('/user')} 
                className='footer-button' type='button'
            >
                <img className='footer-button-img' src={userIcon} alt="" />
            </button>
            <button className='footer-button' type='button'>
                <img 
                    style={{ cursor: 'not-allowed' }}
                    className='footer-button-img' src={shoppingBagIcon} alt="" />
            </button>

            {showSearchInput && (
                <div className="search-input-overlay">
                    <SearchBar />
                </div>
            )}
        </div>
    );
}

export default Footer;
