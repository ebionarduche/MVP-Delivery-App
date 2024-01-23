import React from 'react';
import PropTypes from 'prop-types';
import './style/WallpaperDesktop.css';


function WallpaperDesktop({ restaurant }) {
    return (
        <div>
            <img className='restarant-details-wallpaper' src={restaurant.wallpaper} alt="" />
            <section className='restarant-details-content'>
                <div className='restarant-details-logo-container'>
                    <img className='restarant-details-logo' src={restaurant.logo} alt="" />
                    <div>
                        <h1 className='restarant-details-name'>{restaurant.restaurantName}</h1>
                        <p className='restarant-details-resume'>{restaurant.resume}</p>
                    </div>
                </div>
                <div className='restarant-details-info-container'>
                    <span className='restarant-details-info'>{restaurant.address}</span>
                    <p className='restarant-details-info'>{restaurant.phone}</p>
                </div>
            </section>  
        </div>
    
    );
}

WallpaperDesktop.propTypes = {
    restaurant: PropTypes.shape({
        id: PropTypes.number,
        restaurantName: PropTypes.string,
        resume: PropTypes.string,
        address: PropTypes.string,
        phone: PropTypes.string,
        logo: PropTypes.string,
        wallpaper: PropTypes.string,
    }).isRequired,
};


export default WallpaperDesktop;
