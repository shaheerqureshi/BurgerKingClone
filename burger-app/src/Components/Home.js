import React from 'react';
import '../App.css';
import Burger from '../Components/burger';
import Offers  from '../Components/offers';
import Trending from '../Components/Trending';
import Save from './Save';



const Home = () => {
    return(
        
         <div className="home-content">
            <Burger />
            <div class="offers-wrapper-heading">Our Offers</div><br/>
            <div class="offers-wrapper">
            <Offers />
            </div><br/>
            <button id="view-all-btn" class="nav-btn">View All Offers</button>
             <br/>
            <div class="offers-wrapper-heading">Trending</div><br/>
            <Trending/>
            <Save/>
         </div>
    );
}
export default Home