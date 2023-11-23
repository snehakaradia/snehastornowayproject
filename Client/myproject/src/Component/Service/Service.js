import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div>
        <header className="header-service">
        <h3 className="heading-service">SERVICES</h3>
        
    </header>

    <main>
        <div className="container1-service">
            <div className="one">
                <span>Stornoway specializes in commercial construction work but boasts a wide portfolio covering also industrial and residential projects. </span>
            </div>
            <div className="two">
                <div className="tw1">
                    <img className="tw11" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-mk3Nl8q7JNhe7NlW.png" alt=""></img>
                </div>
                <div className="tw2">
                    <h3 className="tw21">01</h3>
                    <span className="tw22">Industrial Construction</span>
                    <p className="tw23">We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</p>
                </div>
            </div>
            <div className="three">
                <div className="th1">
                    <img className="th11" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-ALpj8Be16JHnMGr0.png" alt=""></img>
                </div>
                <div className="th2">
                    <h3 className="th21">02</h3>
                    <span className="th22">Residential Construction</span>
                    <p className="th23">When it comes to our residential construction projects, we place particular emphasis on discourse with the local authorities to ensure that the development plans for the project are met and executed with care.</p>
                </div>
            </div>
            <div className="four">
                <div className="fo1">
                    <img className="fo11" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-mv0MLEMEwPSnX63R.png" alt=""></img>
                </div>
                <div className="fo2">
                    <h3 className="fo21">03</h3>
                    <span className="fo22">Commercial Construction</span>
                    <p className="fo23">Our clients praise our full-scale project management and complete construction capabilities as our main strengths. We will look after your commercial project from conception to plastering, electrical work, and everything else in-between.</p>
                </div>
            </div>
            <div className="five">
                <div className="fi1">
                    <img className="fi11" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-AoPaDZJlXru7X5Jw.png" alt=""></img>
                </div>
                <div className="fi2">
                    <h3 className="fi21">04</h3>
                    <span className="fi22">Design & Architecture</span>
                    <p className="fi23">Stornoway’s residential design and architecture team makes us different from our competitors. We can look after your construction project from start to finish with no loss in communication on the way.</p>
                </div>
            </div>
        </div>

        <div className="container2-service">
            <img className="image-service" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contact_us_image-AGB0qOpEMec72aep.png" alt=""></img>
            <div className="centre-service">
            <h3 className="us-service">Contact Us</h3>
            <span className="us1">Get in touch with our consultants today to make your construction dream a reality.</span>
            <button className="us2"><a href="contacts.html">Contact Us</a></button>
            </div>
        </div>
    </main>

    </div>
  )
}

export default Service;