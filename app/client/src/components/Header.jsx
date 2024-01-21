import React, { useContext, useState } from 'react';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';


function Header() {
    const [searchTerm, setsearchTerm] = useState('');
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);

    const handleInputChange = async ({ target: { value } }) => {
        setsearchTerm(value);
        try {
            const {data} = await axios.get(`http://localhost:3001/restaurants/search?query=${value}`);
            console.log(data);
            setrestaurantsData(data);
        } catch (error) {
            console.error(error);
        }
        if(value === '') {
            setrestaurantsData(originalData);
        }
    };

    return (
        <div>
            <h1>Header</h1>
            <input 
                id="search-bar" 
                type="text"
                name="search-bar"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Header;
