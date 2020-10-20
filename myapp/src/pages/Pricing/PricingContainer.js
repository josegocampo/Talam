import React from 'react';

const PricingContainer = () => {

    return (
      <>
            <div className="landing-text" style={{fontSize: '2rem'}}>
                <p style={{paddingTop: 100}}>
                    For <strong style={{background:'cyan'}}>Talam members</strong> <strong className="highlight">(job seekers) </strong> 
                    Talam is always completely <strong className="highlight">free</strong>.
                </p>
                <p style={{paddingTop: 50}}>
                    <strong style={{background: '#d662f0'}}>Companies</strong> pay nothing upfront, 
                    <strong className="highlight"> only if you hire</strong> a member of Talam's community you start paying a
                    <strong className="highlight"> monthly fee of $250 usd with a 2 year cap</strong>. If at any moment your work relationships ends Talam payments stop.
                </p>
            </div>
      </>
    )
}

export default PricingContainer;