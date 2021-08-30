import React from 'react'
import { connect } from 'frontity'

import BioContainer from '../styles/BioContainer.style'

import astericBullet from "../../Assets/img/astericbullet.svg"
import GeekImg from "../../Assets/img/GeekTutor-img.jpg"

const Bio = () => {
    return(
        <BioContainer>
            <section className="bio">
                <div className="section-header">
                    <h2>Bio</h2>
                </div>
                <div className="bio-contents">
                    <div className="images-container">
                        <div className="images">
                            <img src={GeekImg} alt="GeekTutor"/>
                            <img src={GeekImg} alt="GeekTutor"/>
                            <img src={GeekImg} alt="GeekTutor"/>
                        </div>
                    </div>
                    <div className="bio-experience">
                        <div className="experience-container">
                            <div className="experience">
                                <div className="img">
                                    <img src={astericBullet} alt="Experience 1"/>
                                </div>
                                <p>Eight years of web development with PHP, two years of mobile development with Flutter</p>
                            </div>
                            <div className="experience">
                                <div className="img">
                                    <img src={astericBullet} alt="Experience 1" />
                                </div>
                                <p>Twenty years of wordpress, developed over 40 wordpress websites across e-commerce, business, professional and personal fields</p>
                            </div>
                            <div className="experience">
                                <div className="img">
                                    <img src={astericBullet} alt="Experience 1" />
                                </div>
                                <p>Product Manager @pethsdigitals, supervised and launched software products used by over 1,000,000 customers worldwide</p>
                            </div>
                            <div className="experience">
                                <div className="img">
                                    <img src={astericBullet} alt="Experience 1" />
                                </div>
                                <p>Community advocate for DSC Unilag(ex lead), GDG Lagos, OSCA Africa and Wordpress Lagos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BioContainer>
    )
}

export default connect(Bio)