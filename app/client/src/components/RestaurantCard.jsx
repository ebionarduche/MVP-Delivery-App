import React from 'react';
import PropTypes from 'prop-types';



function RestaurantCard({ restaurantsData }) {
    return (
        <div>
            <h1>RestaurantCard</h1>
            {
                restaurantsData.map((restaurant) => (
                    <div key={restaurant.id}>
                        <h1>{restaurant.restaurantName}</h1>
                        <h2>{restaurant.resume}</h2>
                        <h2>{restaurant.phone}</h2>
                    </div>
                ))
            }
        </div>
    );
}

RestaurantCard.propTypes = {
    restaurantsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            restaurantName: PropTypes.string,
            resume: PropTypes.string,
            address: PropTypes.string,
            phone: PropTypes.string,
            logo: PropTypes.string,
            categories: PropTypes.shape({
                id: PropTypes.number,
                category: PropTypes.string,
            }),
        })
    ).isRequired,
};


export default RestaurantCard;
