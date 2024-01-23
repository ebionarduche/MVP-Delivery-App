import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import './style/RestaurantDetails.css';
import CarouselProducts from '../components/CarouselProducts';


function RestaurantDetails() {
    const [meals, setMeals] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [restaurant, setrestaurant] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMeals = await axios.get('http://localhost:3001/products/type/1');
                const responseDrinks = await axios.get('http://localhost:3001/products/type/2');
                const responserestaurant = await axios.get(`http://localhost:3001/restaurants/find/${id}`);
                setrestaurant(responserestaurant.data);
                setMeals(responseMeals.data);
                setDrinks(responseDrinks.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className='restarant-details-container'>
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
                <ProductsCard products={meals} />
                <ProductsCard products={drinks} />
                <CarouselProducts products={meals} />
                <CarouselProducts products={drinks} />
            </div>
        </div>
    );
    
}

export default RestaurantDetails;