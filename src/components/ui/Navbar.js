import React, { useEffect, useState } from "react";
import '../ui/Navbar.css';

function Navbar() {
    const [count, setCount] = useState(5)
    useEffect(() => {
        const interval = setInterval(() => {
            if (count == 0) {
                console.log("done")
                clearInterval(interval)
            } else {
                setCount(count - 1)
                console.log(count)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [count])
    return (
        <body className="NavContainer">
            <div className="Menu">
                <h1>Menu</h1>
            </div>
            <div className="Score">
                <h1>Score</h1>
            </div>
            <div className="Time">
                <h1>{count}</h1>
            </div>
            <div className="HiScore">
                <h1>High Score</h1>
            </div>
        </body>
    )
}

export default Navbar;