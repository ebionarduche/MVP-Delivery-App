import React, { useContext, useState } from 'react';
import RestaurantContext from '../context/RestaurantContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style/Header.css';
import mouth from '../images/mouth.png';
import user from '../images/icons/user.svg';
import logOut from '../images/icons/log-out.svg';
import shoppingBag from '../images/icons/shopping-bag.svg';


function Header() {
    const history = useHistory();
    
    const [searchTerm, setsearchTerm] = useState('');
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);
    // const [userInfo, setUserInfo] = useState({});


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

    const handleLogOut = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <div className='header-container'>
            <img className='header-img' src={mouth} alt="" />
            <input 
                id="search-bar" 
                className='header-search-bar'
                type="text"
                name="search-bar"
                placeholder="Busque por item ou restaurante"
                value={searchTerm}
                onChange={(e) => handleInputChange(e)}
            />
            <section>
                <p>{`Olá ${name || 'Usuário'}, você está neste endereço?`}</p>
                <span>{`${name || 'Endereço indisponivel'}`}</span>
            </section>
            <img src={user} alt=""  width='30px'/>
            <button
                onClick={handleLogOut}
            >
                <img src={logOut} alt=""  width='30px'/>
            </button>
            <img src={shoppingBag} alt=""  width='30px'/>
        </div>
    );
}

export default Header;
