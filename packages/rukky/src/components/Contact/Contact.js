import React from 'react'
import { connect } from 'frontity'

import ContactContainer from '../styles/ContactContainer.style'
import emailSvg from '../../Assets/img/email-svg.svg'
import twitterSvg from '../../Assets/img/twitter-svg.svg'
import paystackSvg from '../../Assets/img/paystack-svg.svg'
import abegSvg from '../../Assets/img/abeg-svg.svg'

const Contact = () => {
    return(
        <ContactContainer>
            <section className="contact-me">
                <div className="section-header">
                    <h2>
                        Contact me
                    </h2>
                </div>
                <div className="contact-section-container">
                    <div className="contact-caption">
                        <p>Reach out to me via email, twitter or the weather ;)</p>
                    </div>
                    <div className="contact-links-container">
                        <div className="contact-links">
                            <div className="contact-cards">
                                <a href="mailto: akinjobi.sodiq@gmail.com" target="_blank"><span><img src={emailSvg} /> akinjobi.sodiq@gmail.com</span></a>
                            </div>
                            <div className="contact-cards">
                                <a href="https://twitter.com/Geektutor" target="_blank"><span><img src={twitterSvg} alt="twitter" /> @geektutor</span></a>
                            </div>
                            <div className="contact-cards">
                                <a href="geektutor.xyz/go/pay" target="_blank"><span><img src={paystackSvg} alt="paystack" /> geektutor.xyz/go/pay</span></a>
                            </div>
                            <div className="contact-cards">
                                <a href="https://abeg.app/profile/geektutor" target="_blank"><span><img src={abegSvg} alt="abeg" /> @geektutor</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ContactContainer>
    )
}

export default connect(Contact)