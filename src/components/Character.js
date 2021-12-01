import React from "react";
<<<<<<< HEAD:src/components/map/Character.js
import { dog } from "../../assets/images";
=======
import { dog } from "../assets/images";
>>>>>>> fb603b3fd13cd9965c04245445ee547c7830c197:src/components/Character.js
import './Character.css'


function Character({char}) {
    const yBase = char.y * 20;
    const xBase = char.x * 10;
    const yAbs = yBase + (100 / 16);
    const xAbs = xBase + (100 / 16)
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
                zIndex: 1,
                height: '30px',
                width: '30px'
            }}

        />
    )
}
export default Character;