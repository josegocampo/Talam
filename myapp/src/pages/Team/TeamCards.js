import React from 'react';
import cami2 from './../../images/cami2.png';
import joe2 from './../../images/joe2.png';

const TeamCards = () => {

    return (
        <div className="team-container">
            <div className="team-card">
                <img src={cami2} className="team-pic" />
                <span className="team-title">Camila Mena | COO </span>
                <div className="team-bio">
                    <p>
                        Camila is a psychologist and a business and administration major with
                        4 years of experience as a head hunter.
                    </p>

                    <p>
                        She is passionate about helping people improve their lives and brings
                        a unique set of abilities and knowledge very specific to our solution.
                    </p>
                </div>

            </div>
            <div className="team-card">
                <img src={joe2} className="team-pic" />
                <span className="team-title">Jose Ocampo | CEO </span>
                <div className="team-bio">
                   <p> Jose is a Full Stack Web Developer and also an attorney.</p>

                    <p>
                        He is passionate about remote work, the future of education and
                        startup cities.
                    </p>
                </div>

            </div>
        </div>


    )


}

export default TeamCards;
