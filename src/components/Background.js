import React from 'react';
import { grass, door } from '../assets/images';
import Tile from './Tile';
import {tiles2} from './tiles/tiles2';
import { tiles1 } from './tiles/tiles1';

function Background({tiles, char, setTiles, setChar}) {
    if(tiles[3][7]=== 'door' && char.x >= 1.5 && char.y >= 3){
        setChar({x: char.x-1, y: char.y-1})
        setTiles(tiles2)
    }
    if(tiles[0][0]=== 'door' && char.x <= -4 && char.y <= 1){
        setChar({x: char.x+1, y: char.y+1})
        setTiles(tiles1)
    }
    return (
        <div>
            {tiles.map((row, y) => {
                const yBase = y * 20;
                return row.map((tile, x) => {
                    const xBase = x * 10;
                    const yAbs = yBase + (100 / 16);
                    const xAbs = xBase + (100 / 16);
                    let src;
                    let z
                    if (tile === 'grass') {
                        src = grass
                        z = 0
                    } else if (tile === 'door') {
                        src = door
                        z = 2
                    }
                    return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} zLevel={z} />
                })
            })}
        </ div>
    )
}

export default React.memo(Background);