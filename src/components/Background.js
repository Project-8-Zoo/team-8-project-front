import React from 'react';
import { grass, door, hpath, llama, mtn, tree, boa, junglea8, junglea7, waterfall } from '../assets/images';
import Tile from './Tile';
import {tiles2} from './tiles/tiles2';
import { tiles1 } from './tiles/tiles1';
import { tiles3 } from './tiles/tiles3';

function Background({tiles, char, setTiles, setChar}) {
    if(tiles[3][7]=== 'door' && char.x >= 1.5 && char.y >= 3){
        //from home to llama
      
        setChar({x: char.x-1, y: char.y-1})
        setTiles(tiles2)
    }
    if(tiles[0][0]=== 'door' && char.x <= -4 && char.y <= 1){
        //from boa to home
        
        setChar({x: char.x+1, y: char.y+1})
        setTiles(tiles3)
    }
    if(tiles[3][5]=== 'llama' && char.x <= -4 && char.y <= 1){
        //from llama to boa
        
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
                    } else if (tile === 'hpath') {
                        src = hpath
                        z = 0
                    } else if (tile === 'llama') {
                        src = llama
                        z = 0
                    }
                    else if (tile === 'mtn') {
                        src = mtn
                        z = 0
                    }
                    else if (tile === 'tree') {
                        src = tree
                        z = 0
                    }
                    else if (tile === 'boa') {
                        src = boa
                        z = 0
                    }
                    else if (tile === 'junglea8') {
                        src = junglea8
                        z = 0
                    }
                    else if (tile === 'junglea7') {
                        src = junglea7
                        z = 0
                    }
                    else if (tile === 'waterfall') {
                        src = waterfall
                        z = 0
                    }
                    return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} zLevel={z} />
                })
            })}
        </ div>
    )
}

export default React.memo(Background);