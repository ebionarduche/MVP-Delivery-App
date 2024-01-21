import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/CategoriesList.css';


function CategoriesList() {
    const [categories, setCategories] = useState([]);

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

    return (
        <div className='categories-list-container'>
            {
                categories.map((category, index) => (
                    <div className='categories-list-section' key={index}>
                        <img className='categories-list-img' src={category.image} alt="" />
                        <span className='categories-list-title' >{category.category}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default CategoriesList;