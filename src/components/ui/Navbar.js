import React from "react";
import '../ui/Navbar.css';

function Navbar() {
    return (
        <body className="NavContainer">
            <div className="Menu">
            <h1>Menu</h1>
            </div>
            <div className="Score">
            <h1>Score</h1>
            </div>
            <div className="Time">
            <h1>Time</h1>
            </div>
            <div className="HiScore">
            <h1>High Score</h1>
            </div>
        </body>
    )
}

export default Navbar;