import React from 'react';

const WhyContainer = () => {

    return (
        <div style={{width: 800, margin: '0 auto'}}>
            <div className="landing-text" style={{fontSize: '1.8rem'}}>Latin America has the most incredible talent, but the job opportunities are not always the best. Talam is an anagram
            of Latam and it also means <span style={{color: 'green'}}>Tal</span>ent <span style={{color: 'green'}}>Am</span>ericas.
            </div>

            <div className="landing-pitch" style={{ marginTop: 30, lineHeight: '2rem' }}>

                <p>
                    <strong>Salary comparisson:</strong> In most of Latin America a Junior Software Engineer salary gravitates in average
                    around <strong className="highlight">$1,000 to $2,000</strong> usd per month. The exact same position, requiring the same skills and the same experience in the US
                    pays anywhere from <strong className="highlight">$5,000 to $10,000 usd monthly</strong>. There is a huge opportunity for arbitrage here,
                    where employees can increase their salaries by 2x+ while we enable employers to save 1/2 of their hiring costs and everyone still walks
                    away with a huge smile in their face.
                </p>
                <p>
                    <strong>Why now? :</strong> With current world events the already rapid <strong className="highlight">shift towards remote work </strong> 
                    accelerated at uninmiaginable speeds.
                    This is a tremendous opportunity to improve people's quality of life. Folks can work from anywhere, avoid commuting, and this opens a
                    world of new job opportunities remotely for workers everywhere where they can take advantage of entering a <strong className="highlight">
                    global rather than a local market</strong>. 
                   <strong> For companies</strong> this is also very attractive, they now have access to a global pool of talent. 
                   The problem is that <strong className="highlight">finding the right candidates is a very resource intensive activity
                   </strong>. How much easier it would be if they had pre veted candidates coming their way. And how much better
                    it would be for job seekers to be put infront real chats and interviews with people looking to hire them, without having to guess or 
                    applying blindly to hundreds of opportunities.
                </p>

                <p>
                    <strong>Why Latam only:</strong> Latin America has <strong className="highlight">very similar time zones with the US and most of Europe
                    </strong>, ranging anywhere from 0 to 5 hours
                    of difference. Latin America is part of the <strong className="highlight">Western culture</strong> and has very similar values and mindset than the US and Europe, there is no 
                    cultural shock in working with each other there. Latin America has a tremendous pool of high quality professionals, but the job industry is
                    not always the best, so a lot of Latam's talent migrates to find better opportunities, we want to provide those opportunities without them having
                    to move so they can help empower and invest in local ecosystems. 
                </p>

            </div>
        </div>
    )
}

export default WhyContainer;