import React from "react";
import Background from './Background';
import Character from './Character';

function Map({char, setChar}) {
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
            <Background />
            <Character char={char} setChar={setChar}/>
        </div>
    )
}

export default Map;