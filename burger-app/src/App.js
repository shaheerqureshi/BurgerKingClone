import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Burger from './Components/burger'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />    
      </header>
      
      <Burger />
    </div>
  );
}

export default App;
