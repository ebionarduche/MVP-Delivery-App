// SearchBar.js
import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import RestaurantContext from '../context/RestaurantContext';
import './style/Header.css';


function SearchBar() {
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);
    const [searchTerm, setsearchTerm] = useState('');

    const debounceTimerRef = useRef(null);

    const debounce = (func, delay) => {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        debounceTimerRef.current = setTimeout(func, delay);
    };

    const handleInputChange = ({ target: { value } }) => {
        setsearchTerm(value);

        debounce(async () => {
            try {
                console.log('teste');
                const { data } = await axios.get(`http://localhost:3001/restaurants/search?query=${value}`);
                setrestaurantsData(data);
            } catch (error) {
                console.error(error);
            }

            if (value === '') {
                setrestaurantsData(originalData);
            }
        }, 500); 
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
