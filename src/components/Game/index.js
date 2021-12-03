import React from 'react';
import GardenDoor from '../GardenDoor'
import Questions from '../ui/Questions';


function Game() {
    return (
        <div className="GameContainer">
          <div className="LowerContainer">
            <div className="QuestionsContainer">
            <Questions />
            </div>
            <div className="MapContainer">
              <GardenDoor />
            </div>
          </div>
        </div>
    )
}

export default Game;