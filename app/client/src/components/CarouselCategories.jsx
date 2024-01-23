import React, { useContext, useState, useEffect } from 'react';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';
import './style/CarouselCategories.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function CarouselCategories() {
    const { setrestaurantsData, originalData } = useContext(RestaurantContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/categories');
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleImageClick = async (categoryId) => {  
        setSelectedCategoryId(categoryId);
        try {
            const { data } = await axios.get(`http://localhost:3001/restaurants/category/${categoryId}`);
            setrestaurantsData(data);
        } catch (error) {
            console.error(error);
        }
        if(categoryId === 0) {
            setrestaurantsData(originalData);
        }
    };

    return (
        <Swiper 
            slidesPerView={3}
            spaceBetween={50}
            zoom={false}
            className='categories-carousel-container'>
            {
                categories.map((category) => (
                    <SwiperSlide
                        key={category.id}
                        onClick={() => handleImageClick(category.id)}
                    >
                        <div 
                            className={`categories-carousel-section ${category.id === selectedCategoryId ? 'selected' : ''}`}

                        >
                            <img className='categories-carousel-img' src={category.image} alt="" />
                            <span className='categories-carousel-title'>{category.category}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default CarouselCategories;
