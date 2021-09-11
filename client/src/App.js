import './App.css';
import React from 'react';
import EcoInfo from './components/EcoInfo';
import DropDown from './components/DropDown'
import axios from 'axios';

function App() {
  return (
    <div className="App">

      <div className="MainHeader">
        <nav className="navBar">
          <div className="logo">Logo</div>
          <header className="Eco">Eco</header>
          <header className="Check">Check</header>

          <div className="nav_links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">Tips</a>
            <a href="">Contact</a>
          </div>

        </nav>
      </div>

     
      <div className="MainBody">
         <DropDown/>
        <EcoInfo />
      </div>


    </div>
  );
}

export default App;
