import React from 'react';
import './App.css';
import Character from './components/Character';
import GardenDoor from './components/GardenDoor'
import Navbar from './components/ui/Navbar';
import Questions from './components/ui/Questions';

function App() {
  return (
      <div className="App">
        <div className="GameContainer">
          <Navbar/>
        <div className="LowerContainer">
        <Questions />
        <div className="MapContainer">
        <GardenDoor />
        <Character />
        </div>
        </div>
        </div>
      </div>
  );
}

export default App;
