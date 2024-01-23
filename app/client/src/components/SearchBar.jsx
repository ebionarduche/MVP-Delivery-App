// SearchBar.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import RestaurantContext from '../context/RestaurantContext';
import './style/Header.css';


function SearchBar() {
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);
    const [searchTerm, setsearchTerm] = useState('');

    const handleInputChange = async ({ target: { value } }) => {
        setsearchTerm(value);
        try {
            const { data } = await axios.get(`http://localhost:3001/restaurants/search?query=${value}`);
            setrestaurantsData(data);
        } catch (error) {
            console.error(error);
        }
        if (value === '') {
            setrestaurantsData(originalData);
        }
    };

    return (
        <input
            id="search-bar"
            className='header-search-bar'
            type="text"
            name="search-bar"
            placeholder="Busque por item ou restaurante"
            value={searchTerm}
            onChange={(e) => handleInputChange(e)}
        />
    );
}

export default SearchBar;
