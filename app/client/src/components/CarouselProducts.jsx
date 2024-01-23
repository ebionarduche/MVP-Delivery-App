import React from 'react';
import PropTypes from 'prop-types';
import './style/CarouselProducts.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


function CarouselProducts({ products }) {

    return(
        <Swiper 
            spaceBetween={100}
            slidesPerView={2}
            className='product-carousel-container'>
            {
                products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className='product-carousel'>
                            <img className='product-carousel-img' src={product.illustration} alt="" />
                            <h1 className='product-carousel-title'>{product.productName}</h1>
                            <div className='product-carousel-description-container'>
                                <h2 className='product-carousel-description'>{product.description}</h2>
                                <span className='product-carousel-price'>{`R$ ${product.price}`}</span>
                            </div>
                        </div>
                    </SwiperSlide>

                ))
            }
        </Swiper>
    );
}


CarouselProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            illustration: PropTypes.string,
            productName: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
        })
    ).isRequired,
};


export default CarouselProducts;

