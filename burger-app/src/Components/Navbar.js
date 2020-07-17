import React from 'react';
import '../App.css';


const Navbar = () =>{
    return(
        <nav class="white">
            <div class="nav-wrapper">
            <img href="#" alt="logo" src="https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png" class="logo-small brand-logo center"/>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="orders.js">Orders</a></li>
                <li><a href="rest.js">Resturants</a></li>
                <li><a href="offers.html">Offers</a></li>
                <li><a href="trending.html">Trending</a></li>
                <li><a href="more.html">More</a></li>
            </ul>
            <ul class="right hide-on-med-and-down">
                <li><button class="nav-btn">Sign Up</button></li>
                <li><button id="cart-btn" class="nav-btn">
                    $0.00
                    <img alt="bag" class="bag" src="data:image/png;base64,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"/></button></li>
            </ul>
            
            </div>
            <div class="lower-div left">
                 How would you like to receive this order? <span>Change</span>
            </div>
  </nav>
    );
}
export default Navbar