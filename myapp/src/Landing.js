

import React from 'react';
import logo from './logo.svg';
import latam from './latam.png'

const Landing = () => {

    return(
        <>
            <p className="title">Welcome to Talam <img src={latam} className="latam"/></p>
            <p>Our mission is to match the best Latin American talent with remote work opportunities that they love.</p>
            <p>We are opening very soon...</p>
            <div className="click-me">
              <button>I want a Remote Job!</button>
              <button>Hire the best talent in Latam!</button>
            </div>
        </>
    )
}

export default Landing;