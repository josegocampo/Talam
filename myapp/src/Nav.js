
import React from 'react'
import logo from './logo.png'

const Nav = () => {

    return (
       <div style={{background: '#FFF9D5', display: 'flex', justifyContent: 'center'}}>
            <div className="navigator">
                <div className="talam">
                    <img src={logo} alt="logo" className="logo"/>
                    <span>talam</span>
                </div>
                <div className="nav-links">
                    <a href="#">Why Talam ?</a>
                    <a href="#">Team</a>
                    <a href="#">Launch</a>
                    <a href="#">About</a>
                </div>
            </div>
       </div>
    )
}

export default Nav;
