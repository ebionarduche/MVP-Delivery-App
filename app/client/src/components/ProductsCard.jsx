import React from 'react';
import PropTypes from 'prop-types';
import './style/ProductsCard.css';



function ProductsCard({ products }) {

    return(
        <div className='product-card-container'>
            {
                products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img className='product-card-img' src={product.illustration} alt="" />
                        <h1 className='product-card-title'>{product.productName}</h1>
                        <div className='product-card-description-container'>
                            <h2 className='product-card-description'>{product.description}</h2>
                            <span className='product-card-price'>{`R$ ${product.price}`}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}


ProductsCard.propTypes = {
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


export default ProductsCard;

