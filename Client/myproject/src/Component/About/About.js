import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
         <header className="header-about">
        <h3 className="heading-about">ABOUT</h3>
        
    </header>
    <main>
        <div className="container1-about">
            <div className="part1">
                <div className="p1">
                    <span>Stornoway services and history</span>
                </div>
                <div className="p2">
                    <p>Stornoway started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high standard and work as consultants, solving our clients’ problems. </p>
                </div>
                <div className="p3">
                    <p>The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence at everything we do.</p>
                </div>
            </div>
            <div className="part2">
                <img className="img1" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=368,fit=crop/stornowayj2oil/Rectangle-AR0pelPw3gTGBODM.png" alt=""></img>
                <img className="img2" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/stornowayj2oil/oleg-laptev-KDawdoaC-ts-unsplash-m2WO1pgLRWhxByyq.jpg" alt=""></img>
            </div>
            <div className="part3">
                <div className="p4">
                    <span>Stornoway people and culture</span>
                </div>
                <div className="p5">
                    <p>Our people are what make us unique. Rather than outsourcing our construction engineers from questionable outsourcing establishments, we provide them with an environment that supports professional growth.  </p>
                </div>
                <div className="p6">
                    <p>At Stornoway, we are strong believers in giving our employees a voice. Our teams are put together with the help of our resident psychologist to ensure maximum productivity and engagement.</p>
                </div>
            </div>
        </div>
    </main>
   
    </div>
  )
}

export default About;