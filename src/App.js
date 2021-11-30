import React from 'react';
import { RecoilRoot } from 'recoil';
import Character from './components/map/Character';
import GardenDoor from './components/Garden/map/Door'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>GardenDoor</h1>
        <GardenDoor />
        <Character />
      </div>
    </RecoilRoot>
  );
}

export default App;
