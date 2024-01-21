import React, {useContext} from 'react';
import RestaurantContext from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';




function Home() {
    const { restaurantsData } = useContext(RestaurantContext);

    return(
        <div>
            <h1>Home</h1>
            <RestaurantCard restaurantsData={restaurantsData}/>
        </div>
    );
}

export default Home;