import React from 'react';
import  { useEffect, useCallback} from "react";
import ArrowsIcon from "./ArrowsIcon";

function Inputs({char, setChar}) {

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
        });
      } else if (e.keyCode === 39) {
        // right
        setChar({
          x: char.x < 2 ? char.x + .5 : 2,
          y: char.y,
        });
      } else if (e.keyCode === 38) {
        // up
        setChar({
          x: char.x,
          y: char.y > 0 ? char.y - .5 : 0,
        });
      } else if (e.keyCode === 40) {
        // down
        setChar({
          x: char.x,
          y: char.y < 3.5 ? char.y + .5 : 3.5,
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
      </div>
      <div className="flex justify-between">
        <div
          onClick={() => {
            keyPressHandler({ keyCode: 37 });
          }}
          className="button"
        >
          LEFT
        </div>
        <div
          onClick={() => {
            keyPressHandler({ keyCode: 38 });
          }}
          className="button"
        >
          UP
        </div>
      </div>
      <div className="flex justify-between">
        <div
          onClick={() => {
            keyPressHandler({ keyCode: 40 });
          }}
          className="button"
        >
          DOWN
        </div>
        <div
          onClick={() => {
            keyPressHandler({ keyCode: 39 });
          }}
          className="button"
        >
          RIGHT
        </div>
      </div>
    </div>
  );

}

export default Inputs;