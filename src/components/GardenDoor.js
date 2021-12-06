import React, { useState } from 'react';
import Map from './Map';
import Inputs from './input';
import Questions from './ui/Questions';
import { tiles2 } from './tiles/tiles2';

function GardenDoor() {
    const [tiles, setTiles] = useState(tiles2)
     const [highscore, setHighscore] = useState(0);
    const charState = {
        x: 1,
        y: 2
    };
    const [char, setChar] = useState(charState)
    return (
        <>
        <div className="QuestionsContainer">
            <Questions tiles={tiles} highscore={highscore} setHighscore={setHighscore}/>
        </div>
            <div className="MapContainer">
                <Map char={char} setChar={setChar} tiles={tiles} setTiles={setTiles}/>
            </div>
            <Inputs char={char} setChar={setChar} />
        </>
    )
}

export default GardenDoor;