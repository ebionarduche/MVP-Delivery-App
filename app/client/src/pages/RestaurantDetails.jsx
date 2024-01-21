import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantContext from '../context/RestaurantContext';


function RestaurantDetails() {
    const { restaurantsData } = useContext(RestaurantContext);
    const { id } = useParams();

    const restaurant = restaurantsData[id - 1];
    
    return (
        <div>
            <img src={restaurant.wallpaper} alt="" />
            <img src={restaurant.logo} alt="" />
            <h1>{restaurant.restaurantName}</h1>
            <p>{restaurant.resume}</p>
            <p>{restaurant.address}</p>
        </div>
    );
}

export default RestaurantDetails;