
import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logoyellow from './images/logoyellow.png'

const Navigator = () => {


    return (
      <div style={{display: 'flex', flexDirection: 'column', top: 0, position: 'sticky'}}>
            <div className ="topnav">
                   Talam is the most efficient way to hire for remote jobs. Let us do the work for you :)
            </div>
           <div style={{backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="navigator">
                <Link to="/">
                    <div className="talam">
                            <img src={logo3} className="logo"></img>
                            <img src={logoyellow} className="logoyellow"></img>
                            talam
                    </div>
                    </Link>
                    <div className="nav-links">
                        <Link to="/how">How it works</Link>
                        <Link to="/why">Why Talam?</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/support">Support</Link>
                    </div>
                </div>
                {/* <button className="sign-in">Sign in</button> */}
           </div>
      </div>
    )
}

export default Navigator;
