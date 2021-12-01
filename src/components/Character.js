import React from "react";
import { dog } from "../assets/images";
import './Character.css'


function Character({char}) {
    console.log(char)
    const yBase = char.y * 20;
    const xBase = 1 * 20;
    const yAbs = yBase + (100 / 16);
    const xAbs = xBase + (100 / 16) * char.x;
    let src = dog
    return (
        <img
            alt='the character'
            src={src}
            x={xAbs}
            y={yAbs}
            className='character'
            style={{
                position: 'relative',
                left: `${xAbs}%`,
                top: `${yAbs}%`,
                height: '30px',
                width: '30px'
            }}

        />
    )
}
export default Character;