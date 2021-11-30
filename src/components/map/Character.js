import React from "react";
import { atom, useRecoilValue } from "recoil";
import { dog } from "../assets/images";


function Character() {
    const CharState = atom({
        key: "charState",
        default: {
            x: 1,
            y: 2,


        }
    });
    const { x, y } = useRecoilValue(CharState);
    const yBase = y * 20;
    const xBase = 1 * 20;
    const yAbs = yBase + (100 / 16);
    const xAbs = xBase + (100 / 16) * x;
    let src = dog
    return (
        <img
            alt='the character'
            src={src}
            x={xAbs}
            y={yAbs}
            className='character'
            style={{
                left: `${xAbs}%`,
                top: `${yAbs}%`,
                height: '30px',
                width: '30px'
            }}

        />
    )
}
export default Character;