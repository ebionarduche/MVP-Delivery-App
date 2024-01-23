import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/RestaurantCard.css';




function RestaurantCard({ restaurantsData }) {
    const history = useHistory();


    const handleClick = (productId) => {
        history.push(`/restaurant-details/${productId}`);
    };
    
    return (
        <div className='restaurant-card-container'>
            {
                restaurantsData.map((restaurant) => (
                    <div 
                        type="button"
                        onClick={() => handleClick(restaurant.id)}
                        className='restaurant-card' key={restaurant.id}>
                        <img className='restaurant-card-wallpaper'src={ restaurant.wallpaper } alt="" />
                        <img className='restaurant-card-perfil' src={restaurant.logo} alt="" />
                        <div className='restaurant-card-title'> 
                            <h1 className='restaurant-card-name'>{restaurant.restaurantName}</h1>
                            <h2 className='restaurant-card-resume'>{restaurant.resume}</h2>
                        </div>
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
