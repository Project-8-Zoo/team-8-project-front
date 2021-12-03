import React, {useState} from 'react';
import './App.css';
import Character from './components/Character';
import GardenDoor from './components/GardenDoor'
import Navbar from './components/ui/Navbar';

function App() {
  return (
      <div className="App">
        <div className="GameContainer">
          <Navbar/>
        <div className="LowerContainer">
        <GardenDoor/>
        </div>
        </div>
      </div>
  );
}

export default App;
