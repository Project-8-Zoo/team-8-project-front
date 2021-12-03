import React from 'react';
import GardenDoor from '../GardenDoor'
import Questions from '../ui/Questions';


function Game() {
    return (
        <div className="GameContainer">
          <div className="LowerContainer">
              <GardenDoor />
          </div>
        </div>
    )
}

export default Game;