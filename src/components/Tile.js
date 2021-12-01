import React from 'react';

function Tile({src, x, y, zLevel}) {
    return <img
        alt='game map tile'
        src={src}
        className='tile'
        style = {{ left: ` ${x}%`, top:`${y}%`, zIndex:`${zLevel}`}}
    />

    
}

export default Tile;