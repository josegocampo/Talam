import React from 'react';

const HowContainer = () => {

    return (
        <>
            <div className="landing-text">Talam is a community of Latam's top talent that matches them with remote first
            work opportunities.</div>

          <div className="landing-pitch" style={{marginTop: 30}}>
                <p><strong>As a Talam member:</strong> You gain access to <strong className="highlight">all our community resources for free</strong>.
                 We will only show Talam members job opportunities they are interested in when they want to see them <strong className="highlight">
                     also for free</strong>.</p>
    
                <p>
                    <strong>As a company:</strong> You give us your requirements and job postings and you gain access to Latam's top talent pool. 
                    We will tell you if there is a match or we will suggest strong pre vetted candidates that are interested in working with you.  
                    <strong className="highlight"> If you are interested </strong>you can schedule an interview or a call with them.
                    You only <strong className="highlight">pay monthly only if you hire</strong> one our candidates and you pay only while they are still employed by you, with a 2 year cap.
                </p>

          </div>
        </>

    )
}

export default HowContainer;