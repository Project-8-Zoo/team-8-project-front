import React, { useState } from 'react';
import Map from './Map';
import Inputs from './input';
import Questions from './ui/Questions';
import { tiles1 } from './tiles/tiles1';

function GardenDoor() {
    const [tiles, setTiles] = useState(tiles1)
    const charState = {
        x: 1,
        y: 2
    };
    const [char, setChar] = useState(charState)
    return (
        <>
            <Questions tiles={tiles}/>
            <div className="MapContainer">
                <Map char={char} setChar={setChar} tiles={tiles} setTiles={setTiles}/>
            </div>
            <Inputs char={char} setChar={setChar} />
        </>
    )
}

export default GardenDoor;