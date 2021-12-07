import React from 'react';
import { useEffect, useCallback } from "react";
import './input.css'

function Inputs({ char, setChar }) {

  const keyPressHandler = useCallback(
    (e) => {
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.keyCode === 37) {
        // left
        setChar({
          x: char.x > -5 ? char.x - .5 : -5,
          y: char.y,
          dir: 1
        });
      } else if (e.keyCode === 39) {
        // right
        setChar({
          x: char.x < 2 ? char.x + .5 : 2,
          y: char.y,
          dir: 2
        });
      } else if (e.keyCode === 38) {
        // up
        setChar({
          x: char.x,
          y: char.y > 0 ? char.y - .5 : 0,
          dir: char.dir
        });
      } else if (e.keyCode === 40) {
        // down
        setChar({
          x: char.x,
          y: char.y < 3.5 ? char.y + .5 : 3.5,
          dir: char.dir
        });
      }
    },
    [char, setChar]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [char]);

  return (
    <div className="buttons w-100">
      <div className="arrows">
        <i className="arrow right"
          onClick={() => {
            keyPressHandler({ keyCode: 39 });
          }} />
        <div>
          <i className="arrow left" onClick={() => {
            keyPressHandler({ keyCode: 37 });
          }} />
          <i className="arrow up" onClick={() => {
            keyPressHandler({ keyCode: 38 });
          }} />
        </div>
        <i className="arrow down"
          onClick={() => {
            keyPressHandler({ keyCode: 40 });
          }} />
      </div>
    </div>
  );

}

export default Inputs;