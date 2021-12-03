import React, { useState } from "react";
import Background from './Background';
import Character from './Character';
import { tiles2 } from './tiles/tiles2';


function Map({char, setChar, setQuest, tiles, setTiles}) {
    return (
        <div
            id="map"
            name="map"
            style={{
                position: 'relative',
                top: '0',
                left: '0',
                // transform: 'translate(-50%, -50%)',
                width: '640px',
                height: '320px',
            }}
        >
            <Character char={char} />
            <Background tiles={tiles} setTiles={setTiles} char={char} setChar={setChar} setQuest={setQuest}/>
            
        </div>
    )
}

export default Map;