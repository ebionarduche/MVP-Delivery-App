import React, {useContext} from 'react';
import RestaurantContext from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';
import brasileira from '../images/brasileira1XfT_5HRd.avif';




function Home() {
    const { restaurantsData } = useContext(RestaurantContext);

    return(
        <div>
            <Header />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <img src={brasileira} alt="" width='150px' />
            <RestaurantCard restaurantsData={restaurantsData}/>
        </div>
    );
}

export default Home;