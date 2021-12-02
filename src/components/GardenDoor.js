import React, {useState} from 'react';
import Map from './Map';
import Inputs from './input';

function GardenDoor() {
    const charState = {
            x: 1,
            y: 2
    };
    const [char, setChar] = useState(charState)
    return (
        <>
            <Map char={char} setChar={setChar}/>
            <Inputs char={char} setChar={setChar}/>
        </>
    )
}

export default GardenDoor;