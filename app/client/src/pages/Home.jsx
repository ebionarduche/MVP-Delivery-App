import React, {useContext} from 'react';
import RestaurantContext from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';




function Home() {
    const { restaurantsData } = useContext(RestaurantContext);

    return(
        <div>
            <Header />
            <CategoriesList />
            <RestaurantCard restaurantsData={restaurantsData}/>
        </div>
    );
}

export default Home;