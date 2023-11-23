import React from 'react';
import './Construction.css';
import { NavLink } from 'react-router-dom';

const Construction = () => {
  return (
    <div>
        <header className="header-construction">
    </header>
    
    <main>
        <div className="container1-construction">
            <div className="health-construction">
                <h3 className="h1-construction">Construction Safety Manager</h3>
                <span className="h2-construction">Hamburg, Germany / FULL-TIME</span>
            </div>
            <div className="health1-construction">
                <div className="heal1-construction">
                    <span className="h3-construction">Summary</span>
                    <p className="h4-construction">As a Construction Safety Manager, you are responsible for ensuring that both the regulatory and company-specific health and safety legislation and regulations are followed both off- and on-site. In this role, you will be reporting directly to the Chief Health and Safety Manager, and are expected to carry out a diverse and in-depth analysis of the current health and safety practices. </p>
                </div>
                <div className="heal2-construction">
                    <span className="h5-construction">Key Responsibilities</span>
                    <p className="h6-construction">You will monitor the whole construction cycle and ensure that firstly, all of the expected health and safety protocols are being followed. Secondly, you analyze the current workflows and develop an in-depth understanding of the bottlenecks and potential risks associated with particular protocols. </p>
                </div>
                <div className="heal3-construction">
                    <span className="h7-construction">Key Skills</span>
                    <div className="h8-construction">
                        <span className="h9-construction">Health and safety regulatory experience, preferably for 5 years or more.</span>
                        <span className="h10-construction">Excellent communication and project management skills.</span>
                        <span className="h11-construction">Full fluency in industry-specific health and safety software.</span>
                        <span className="h12-construction">Ability to work as part of a flexible and adaptable team.</span>
                    </div>
                </div>
                <div className="heal4-construction">
                    <span className="h13-construction">What We Offer</span>
                    <div className="h14-construction">
                        <span className="h15-construction">At Stornoway, you will be able to work with the latest technologies in the industry.</span>
                        <span className="h16-construction">As standard, all of our employees are fully covered by our extensive health insurance, including dental and maternity care.</span>
                        <span className="h17-construction">We also offer a full 30 days of paid annual leave, plus our annual company-wide team-building weekend away. </span>
                        <span className="h18-construction">All protective gear and attractive offices in multiple locations are also available for the successful candidate. </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container2-construction">
            <img className="image-construction" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contact_us_image-AGB0qOpEMec72aep.png" alt=""/>
            <div className="centre-construction">
            <h3 className="us-construction">Contact Us</h3>
            <span className="us1-construction">Get in touch with our consultants today to make your construction dream a reality.</span>
            <button className="us2-construction"><NavLink to='/Contact'>Contact Us</NavLink></button>
            </div>
        </div>
    </main>

    </div>
  )
}

export default Construction;