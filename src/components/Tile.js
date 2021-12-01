import React from 'react';

function Tile({src, x, y, z}) {
    return <img
        alt='game map tile'
        src={src}
        className='tile'
        style = {{ left: ` ${x}%`, top:`${y}%`}}
    />

    
}

export default Tile;