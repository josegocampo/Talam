import React from 'react';
import latam from './../../images/latam.png'

//I havent divided the logic here yet. 
//I might do it if I decide to make a longer page.
const Landing = () => {

    return(
     
            <>
                <div className="landing-text">
                    {/* <p className="title">Welcome to Talam <img src={latam} className="latam"/></p> */}
                    <p>We match the best Latin American talent with remote work opportunities they love.</p>
                    </div>
                    <div className="landing-pitch">
                    <span>
                        <strong>Remote hiring is broken.</strong> Job seekers don't want to spend countless hours filling
                        different applications in job boards. 
                   </span>
                    <span>
                        <strong> For companies hiring is hard and expensive,</strong> it is a very time consuming process
                        which doesnt yield good enough returns.
                    </span>
                    <span>
                        We are here to make your life easier. Talam has a community of pre veted candidates for different 
                        remote first positions.
                    </span>
                    <p>
                        <strong>The opportunity: </strong> <span>Latam is filled with incredibly talented people, but 
                            job opportunities are not always the best. The tech industry is screaming for more talent but it's hard
                            to find and very expensive.  
                            </span>
                           
                    </p>
                    <p><strong>Opening November 2020. Register now for an early start.</strong></p>
                    </div>
                    <div className="click-me">
                      <button className="click-here">I want a Remote Job!</button>
                      <button className="click-here">Hire the best talent in Latam!</button>
                    </div>
               
            </>
    )
}

export default Landing;