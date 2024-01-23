import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import './style/RestaurantDetails.css';
import CarouselProducts from '../components/CarouselProducts';
import { useMediaQuery } from 'react-responsive';
import WallpaperDesktop from '../components/WallpaperDesktop';




function RestaurantDetails() {
    const [meals, setMeals] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [restaurant, setrestaurant] = useState([]);
    const { id } = useParams();
    const isMobile = useMediaQuery({ maxWidth: 768 });


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
            {!isMobile && <Header />}
            <div className='restarant-details-container'>
                <WallpaperDesktop restaurant={restaurant} />
                <h2 className='restarant-details-type'>Pratos</h2>
                { isMobile ? <CarouselProducts products={meals}/> : <ProductsCard products={meals} /> }
                <h2 className='restarant-details-type'>Bebidas</h2>
                { isMobile ? <CarouselProducts products={drinks}/> : <ProductsCard products={drinks} /> }
            </div>
        </div>
    );
    
}

export default RestaurantDetails;