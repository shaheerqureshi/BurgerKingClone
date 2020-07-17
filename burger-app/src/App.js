import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Burger from './Components/burger';
import Offers from './Components/offers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />    
      </header>
      
      <Burger />
      <div class="offers-wrapper-heading">Our Offers</div><br/>
      <div class="offers-wrapper">
        <Offers />
      </div>
    </div>
  );
}

export default App;
