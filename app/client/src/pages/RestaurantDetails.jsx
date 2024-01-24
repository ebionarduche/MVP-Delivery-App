import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import './style/RestaurantDetails.css';
import CarouselProducts from '../components/CarouselProducts';
import { useMediaQuery } from 'react-responsive';
import WallpaperDesktop from '../components/WallpaperDesktop';
import Footer from '../components/Footer';

function RestaurantDetails() {
    const [meals, setMeals] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const { id } = useParams();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const requestMeals = {
        typeId: 1,
        restaurantsId: parseInt(id),
    };

    const requestDrinks = {
        typeId: 2,
        restaurantsId: parseInt(id),
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseRestaurant = await axios.get(`http://localhost:3001/restaurants/find/${id}`);
                const responseMeals = await axios.post('http://localhost:3001/products/restaurant/type', requestMeals);
                const responseDrinks = await axios.post('http://localhost:3001/products/restaurant/type', requestDrinks);

                setRestaurant(responseRestaurant.data);
                setMeals(responseMeals.data);
                setDrinks(responseDrinks.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <Header />
            <div className='restaurant-details-container'>
                <WallpaperDesktop restaurant={restaurant} />
                <h2 className='restaurant-details-type'>Pratos</h2>
                {isMobile ? <CarouselProducts products={meals} /> : <ProductsCard products={meals} />}
                <h2 className='restaurant-details-type'>Bebidas</h2>
                {isMobile ? <CarouselProducts products={drinks} /> : <ProductsCard products={drinks} />}
            </div>
            {isMobile && <Footer />}
        </div>
    );
}

export default RestaurantDetails;
