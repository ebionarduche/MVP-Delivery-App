import React, { useState } from 'react';
import './style/Footer.css';
import SearchBar from './SearchBar';

function Footer() {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <div className='footer-container'>
            <button className='footer-button' type='button'>
                Home
            </button>
            <button className='footer-button' type='button'>
                Bag
            </button>
            <button className='footer-button' type='button' onClick={handleSearchClick}>
                Search
            </button>
            <button className='footer-button' type='button'>
                Perfil
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
