import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';


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
        <div>
            <img src={restaurant.wallpaper} alt="" />
            <img src={restaurant.logo} alt="" />
            <h1>{restaurant.restaurantName}</h1>
            <p>{restaurant.resume}</p>
            <p>{restaurant.address}</p>
            <ProductsCard products={products} />
        </div>
    );
}

export default RestaurantDetails;