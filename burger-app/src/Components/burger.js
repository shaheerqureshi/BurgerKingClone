import React from 'react';
import '../App.css';

const Burger = () => {
    return(
        <div class="burger-div">
          <div class="burger-head">
          ORDER IN WITH PICKUP OR<br/>
          <span class="free">FREE DELIVERY!</span> 
          
          </div>
          <div class="free-order">*ON ORDERS $15 OR MORE</div>
            <div class="header-btns">
          <button id="burger-btn" class="nav-btn">Order PickUp</button>
          <button id="burger-btn" class="nav-btn">Order Delivery</button>
          </div>
        </div>
    );
}
export default Burger;