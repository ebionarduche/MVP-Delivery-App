import React from 'react';
import PropTypes from 'prop-types';
import wallpaper from '../images/nashville-wallpaper.jpg';
import perfil from '../images/nashville-perfil.png';
import './style/RestaurantCard.css';



function RestaurantCard({ restaurantsData }) {
    return (
        <div className='restaurant-card-container'>
            {
                restaurantsData.map((restaurant) => (
                    <div className='restaurant-card' key={restaurant.id}>
                        <img className='restaurant-card-wallpaper'src={ wallpaper } alt="" />
                        {/* <img className='restaurant-card-perfil' src={restaurant.logo} alt="" /> */}
                        <img className='restaurant-card-perfil'src={ perfil } alt="" />
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
