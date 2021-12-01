import  { useEffect, useCallback} from "react";

function Inputs({char, setChar}) {

  const keyPressHandler = useCallback(
    (e) => {
      console.log(e.keyCode);
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.keyCode === 37) {
        // left
        setChar({
          x: char.x > 0 ? char.x - .5 : 0,
          y: char.y,
        });
      } else if (e.keyCode === 39) {
        // right
        setChar({
          x: char.x < 8 ? char.x + .5 : 8,
          y: char.y,
        });
      } else if (e.keyCode === 38) {
        // up
        setChar({
          x: char.x,
          y: char.y > -.5 ? char.y - .5 : 0,
        });
      } else if (e.keyCode === 40) {
        // down
        setChar({
          x: char.x,
          y: char.y < 8 ? char.y + .5 : 8,
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

  return '';
}

export default Inputs;