import React from 'react';
import './style/Footer.css';

function Footer() {
    return (

        <div className='footer-container'>
            <button 
                className='footer-button'
                type='button'>
              Home
            </button>
            <button 
                className='footer-button'
                type='button'>
              Bag
            </button>
            <button 
                className='footer-button'
                type='button'>
              Search
            </button>
            <button 
                className='footer-button'
                type='button'>
              Perfil
            </button>
        </div>

    );
}

export default Footer;