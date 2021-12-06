import React from 'react';
import { arcticmtn, arcticpond, arcticladder, arcticladderrght, arcticpenguin, arcticice, arcticwater, grass, door, hpath, xpath, llama, mtn, tree, boa, junglea1, junglea2, junglea3, junglea4, jungleb1, jungleb3, jungleb4, jungleb5, junglea8, junglea7, jungleb8, junglec2, junglec3, junglec4, junglec6, junglec8, jungled2, jungled3, jungled4, jungmtn, jungmtnd5, jungmtnd8, lakelft, lakerght, waterfall, zoofount, zoobldg, zoogifts, zootckts } from '../assets/images';
import Tile from './Tile';
import { tiles2 } from './tiles/tiles2';
import { tiles1 } from './tiles/tiles1';
import { tiles3 } from './tiles/tiles3';
import { tiles4 } from './tiles/tiles4';
import { tiles5 } from './tiles/tiles5';


function Background({ tiles, char, setTiles, setChar }) {
    if (tiles[3][7] === 'door' && char.x >= 1.5 && char.y >= 3) {
        //from home to llama

        setChar({ x: char.x - 1, y: char.y - 1 })
        setTiles(tiles1)
    }
    if (tiles[0][0] === 'door' && char.x <= -4 && char.y <= 1) {
        //from home to gorilla

        setChar({ x: char.x + 1, y: char.y + 1 })
        setTiles(tiles3)
    }
    if (tiles[3][5] === 'llama' && char.x <= -4 && char.y <= 1) {
        //from llama to boa

        setChar({ x: char.x + 1, y: char.y + 1 })
        setTiles(tiles2)
    }
    if (tiles[0][1] === 'jungled2' && char.x <= -4 && char.y <= 1) {
        //gorilla to llama

        setChar({ x: char.x + 1, y: char.y + 1 })
        setTiles(tiles4)
    }
    if (tiles[1][5] === 'boa' && char.x <= -4 && char.y <= 1) {
        //from gorlla to fox

        setChar({ x: char.x + 1, y: char.y + 1 })
        setTiles(tiles5)
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
                    }
                    else if (tile === 'xpath') {
                        src = xpath
                        z = 0
                    }
                    else if (tile === 'llama') {
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
                    else if (tile === 'junglea1') {
                        src = junglea1
                        z = 0
                    }
                    else if (tile === 'junglea2') {
                        src = junglea2
                        z = 0
                    }
                    else if (tile === 'junglea3') {
                        src = junglea3
                        z = 0
                    }
                    else if (tile === 'junglea4') {
                        src = junglea4
                        z = 0
                    }
                    else if (tile === 'jungleb1') {
                        src = jungleb1
                        z = 0
                    }
                    else if (tile === 'jungleb3') {
                        src = jungleb3
                        z = 0
                    }
                    else if (tile === 'jungleb4') {
                        src = jungleb4
                        z = 0
                    }
                    else if (tile === 'jungleb5') {
                        src = jungleb5
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
                    else if (tile === 'jungleb8') {
                        src = jungleb8
                        z = 0
                    }
                    else if (tile === 'junglec2') {
                        src = junglec2
                        z = 0
                    }
                    else if (tile === 'junglec3') {
                        src = junglec3
                        z = 0
                    }
                    else if (tile === 'junglec4') {
                        src = junglec4
                        z = 0
                    }
                    else if (tile === 'junglec8') {
                        src = junglec8
                        z = 0
                    }
                    else if (tile === 'junglec6') {
                        src = junglec6
                        z = 0
                    }
                    else if (tile === 'jungled2') {
                        src = jungled2
                        z = 0
                    }
                    else if (tile === 'jungled3') {
                        src = jungled3
                        z = 0
                    }
                    else if (tile === 'jungled4') {
                        src = jungled4
                        z = 0
                    }
                    else if (tile === 'jungmtnd5') {
                        src = jungmtnd5
                        z = 0
                    }
                    else if (tile === 'jungmtn') {
                        src = jungmtn
                        z = 0
                    }
                    else if (tile === 'jungmtnd8') {
                        src = jungmtnd8
                        z = 0
                    }
                    else if (tile === 'lakelft') {
                        src = lakelft
                        z = 0
                    }
                    else if (tile === 'lakerght') {
                        src = lakerght
                        z = 0
                    }
                    else if (tile === 'waterfall') {
                        src = waterfall
                        z = 0
                    }
                    else if (tile === 'zoofount') {
                        src = zoofount
                        z = 0
                    }
                    else if (tile === 'zoobldg') {
                        src = zoobldg
                        z = 0
                    }
                    else if (tile === 'zoogifts') {
                        src = zoogifts
                        z = 0
                    }
                    else if (tile === 'zootckts') {
                        src = zootckts
                        z = 0
                    }
                    else if (tile === 'arcticmtn') {
                        src = arcticmtn
                        z = 0
                    }
                    else if (tile === 'arcticladder') {
                        src = arcticladder
                        z = 0
                    }
                    else if (tile === 'arcticladderrght') {
                        src = arcticladderrght
                        z = 0
                    }
                    else if (tile === 'arcticpenguin') {
                        src = arcticpenguin
                        z = 0
                    }
                    else if (tile === 'arcticpond') {
                        src = arcticpond
                        z = 0
                    }
                    else if (tile === 'arcticice') {
                        src = arcticice
                        z = 0
                    }
                    else if (tile === 'arcticwater') {
                        src = arcticwater
                        z = 0
                    }
                    return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} zLevel={z} />
                })
            })}
        </ div>
    )
}

export default React.memo(Background);