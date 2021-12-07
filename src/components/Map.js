import React, { useState } from "react";
import Background from './Background';
import Character from './Character';
import Animal from "./Animals";
import { tiles1 } from './tiles/tiles1';
import { tiles3 } from './tiles/tiles3';
import { tiles2 } from './tiles/tiles2';
import { tiles4 } from './tiles/tiles4';
import { tiles5 } from './tiles/tiles5';



function Map({char, setChar,tiles, setTiles}) {
    // const [tiles, setTiles] = useState(tiles3)
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
            {tiles[0][1]==='jungled2'&&<Animal x={-1} y={2} s={1}/>}
            {tiles[0][1]==='arcticmtn'&&<Animal x={-2} y={2} s={2}/>}
            <Background tiles={tiles} setTiles={setTiles} char={char} setChar={setChar} />
            
        </div>
    )
}

export default Map;