import React from "react";
import { gorilla } from "../assets/images";
import { fox } from "../assets/images";


function Animal({x,y,s}) {
    const yBase = y * 20;
    const xBase = x * 10;
    const yAbs = yBase + (100 / 16);
    const xAbs = xBase + (100 / 16)
    if (s===1){
        var srcs = gorilla
    } else if (s===2){
        var srcs = fox
    }
    // const src=gorilla
    // console.log(s)ß
    return (
        <img
            alt='the character'
            src={srcs}
            x={xAbs}
            y={yAbs}
            className='character'
            style={{
                position: 'relative',
                left: `${xAbs}%`,
                top: `${yAbs}%`,
                zIndex: 1,
                height: '40px',
                width: '40px'
            }}

        />
    )
}
export default Animal;