import React, {useContext} from 'react';
import RestaurantContext from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import CarouselCategories from '../components/CarouselCategories';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/Footer';
import './style/Home.css';



function Home() {
    const { restaurantsData } = useContext(RestaurantContext);
    const isMobile = useMediaQuery({ maxWidth: 768 });


    return(
        <div className='home-container'>
            <Header />
            {!isMobile && <CategoriesList />}
            {isMobile && <CarouselCategories />}
            <RestaurantCard restaurantsData={restaurantsData}/>
            {isMobile && <Footer />}

        </div>
    );
}

export default Home;