import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';
import './style/RestaurantDetails.css';


function RestaurantDetails() {
    const [products, setProducts] = useState([]);
    const { restaurantsData } = useContext(RestaurantContext);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const restaurant = restaurantsData[id - 1];
    
    return (
        <div className='restarant-details-container'>
            <img className='restarant-details-wallpaper' src={restaurant.wallpaper} alt="" />
            <img className='restarant-details-logo' src={restaurant.logo} alt="" />
            <div className='restarant-details-content'>
                <div>
                    <h1 className='restarant-details-name'>{restaurant.restaurantName}</h1>
                    <p className='restarant-details-resume'>{restaurant.resume}</p>
                </div>
                <p className='restarant-details-address'>{restaurant.address}</p>
            </div>
            <h2>Refeições</h2>
            <ProductsCard products={products} />
            <h2>Bebidas</h2>

        </div>
    );
}

export default RestaurantDetails;