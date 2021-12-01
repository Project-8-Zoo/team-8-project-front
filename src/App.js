import React from 'react';
import { RecoilRoot } from 'recoil'
import './App.css';
import Character from './components/map/Character';
import GardenDoor from './components/map/GardenDoor'
import Navbar from './components/ui/Navbar';
import Questions from './components/ui/Questions';

function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;
