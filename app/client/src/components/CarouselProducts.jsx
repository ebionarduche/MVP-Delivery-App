// import React, { useRef } from 'react';



// function CarouselProducts() {
//     const carousel = useRef(null);

//     const handleClickLeft = () => {
//         console.log(carousel.current.offsetWidth);
//         carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
//     };

//     const handleClickRight = () => {
//         console.log(carousel.current.offsetWidth);
//         carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
//     };
//     return (
//         <div className="carousel">
//             <button
//                 onClick={ () => handleClickLeft() }
//                 type="button"
//                 className="carousel-button"
//             >
//                 <img src={ arrowLeft } alt="arrow-left" />
//             </button>
//             <div className="carousel-container" ref={ carousel }>
//                 {
//                     products.map((product) => (
//                         <div key={ product.id } className="carousel-item">
//                             <div className="carousel-image">
//                                 <img src={ product.primaryImage } alt="" />
//                             </div>
//                             <h1>{product.name}</h1>
//                             <h2>{product.categories}</h2>
//                             <span>
//                 R$
//                                 {' '}
//                                 {product.price}
//                             </span>
//                             <button type="button" onClick={ () => handleClick(product.id) }>
//                 Comprar
//                             </button>
//                         </div>
//                     ))
//                 }
//             </div>
//             <button
//                 onClick={ () => handleClickRight() }
//                 type="button"
//                 className="carousel-button"
//             >
//                 <img src={ arrowRight } alt="arrow-right" />
//             </button>
//         </div>
//     );

// }

// export default CarouselProducts;