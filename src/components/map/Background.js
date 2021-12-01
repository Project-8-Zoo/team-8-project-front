import React from 'react';
import {grass, door} from '../../assets/images';
import {MAP_SIZE, TILE_ASPECT_RATIO} from '../../constant'
import Tile from './Tile';

function Background() {
    const tiles = [['grass','grass','grass','grass','grass','grass','grass','grass',],['grass','grass','grass','grass','grass','grass','grass','grass',],['grass','grass','grass','grass','grass','grass','grass','grass',],['grass','grass','grass','grass','grass','grass','grass','door',],];
    // const yOffset = (100/ MAP_SIZE) * (TILE_ASPECT_RATIO / 1.5)
    return(
        <div>
        {tiles.map((row, y) => {
            const yBase = y * 20;
            const xBase = 1 * 20;
            return row.map((tile, x) => {
                const yAbs = yBase + (100/16) ;
                const xAbs = xBase + (100/16) * x;
                let src;
                if (tile === 'grass'){
                    src = grass
                }else if (tile === 'door'){
                    src = door
                }
                return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} />
            })
        })}
        </ div>
    )
}

export default React.memo(Background);