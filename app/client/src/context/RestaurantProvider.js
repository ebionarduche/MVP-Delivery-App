import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RestaurantContext from './RestaurantContext';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

function RestaurantProvider({ children }) {
    const [originalData, setOriginalData] = useState([]);
    const [restaurantsData, setrestaurantsData] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');


    useEffect(() => {
        api.get('/restaurants')
            .then((response) => {
                console.log((response));
                setrestaurantsData(response.data);
                setOriginalData(response.data);
            });
    }, []);

    const initialState = useMemo(
        () => ({
            restaurantsData,
            setrestaurantsData,
            searchTerm,
            setsearchTerm,
            originalData
        }),
        [restaurantsData],
    );

    return (
        <RestaurantContext.Provider value={ initialState }>
            <div>{children}</div>
        </RestaurantContext.Provider>
    );
}

RestaurantProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RestaurantProvider;
