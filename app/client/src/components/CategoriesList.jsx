import React, { useContext, useState, useEffect } from 'react';
import RestaurantContext from '../context/RestaurantContext';
import axios from 'axios';
import './style/CategoriesList.css';

function CategoriesList() {
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
        <div className='categories-list-container'>
            {categories.map((category) => (
                <div
                    className={`categories-list-section ${category.id === selectedCategoryId ? 'selected' : ''}`}
                    key={category.id}
                    onClick={() => handleImageClick(category.id)}
                >
                    <img className='categories-list-img' src={category.image} alt="" />
                    <span className='categories-list-title'>{category.category}</span>
                </div>
            ))}
        </div>
    );
}

export default CategoriesList;
