import React from 'react';
import giraffe from '../../assets/imageassets/giraffe.png'
import './style.css'


function Homepage() {
    return (
        <div>
            <div className="Home"></div>
            <div className="HomeContainer">
                <h1>Hollow World!</h1>
                <img src={giraffe} alt="Giraffe" height={300} width={250} />
                
            </div>
        </div>
    )
}

export default Homepage;