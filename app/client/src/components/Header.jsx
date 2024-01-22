import React, { useContext, useState } from 'react';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';
import './style/Header.css';
import mouth from '../images/mouth.png';
import user from '../images/icons/user.svg';
import logOut from '../images/icons/log-out.svg';
import shoppingBag from '../images/icons/shopping-bag.svg';


function Header() {
    const [searchTerm, setsearchTerm] = useState('');
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);

    const handleInputChange = async ({ target: { value } }) => {
        setsearchTerm(value);
        try {
            const {data} = await axios.get(`http://localhost:3001/restaurants/search?query=${value}`);
            setrestaurantsData(data);
        } catch (error) {
            console.error(error);
        }
        if(value === '') {
            setrestaurantsData(originalData);
        }
    };

    return (
        <div className='header-container'>
            <img className='header-img' src={mouth} alt="" />
            <input 
                id="search-bar" 
                className='header-search-bar'
                type="text"
                name="search-bar"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <span>Olá Fred, você está neste endereço?</span>
            <span>Colocar Endereço</span>
            <img src={user} alt=""  width='30px'/>
            <img src={logOut} alt=""  width='30px'/>
            <img src={shoppingBag} alt=""  width='30px'/>
        </div>
    );
}

export default Header;
