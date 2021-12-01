import React from "react";
import Background from './Background';
import Character from './Character';

function Map({char}) {
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
            <Background />
        </div>
    )
}

export default Map;