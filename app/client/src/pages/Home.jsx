import React, {useContext} from 'react';
import RestaurantContext from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';




function Home() {
    const { restaurantsData } = useContext(RestaurantContext);

    return(
        <div>
            <Header />
            <RestaurantCard restaurantsData={restaurantsData}/>
        </div>
    );
}

export default Home;