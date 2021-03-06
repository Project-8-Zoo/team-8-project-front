import React from "react";
import { dog, dogflipped } from "../assets/images";


function Character({char}) {
    const yBase = char.y * 20;
    const xBase = char.x * 10;
    const yAbs = yBase + (100 / 16);
    const xAbs = xBase + (100 / 16);
    let src = dog
    if(char.dir === 1){
        src = dog
    }else if (char.dir === 2){
        src = dogflipped
    }
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
                zIndex: 1,
                height: '30px',
                width: '30px'
            }}

        />
    )
}
export default Character;