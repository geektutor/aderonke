import React from 'react'
import { connect } from 'frontity'

import BioContainer from '../styles/BioContainer.style'

import astericBullet from "../../Assets/img/astericbullet.svg"
import GeekImg from "../../Assets/img/GeekTutor-img.jpg"

const Bio = () => {
    return(
        <BioContainer>
            <section class="bio">
                <div class="section-header">
                    <h2>Bio</h2>
                </div>
                <div class="bio-contents">
                    <div class="images-container">
                        <div class="images">
                            <img src={GeekImg} alt="GeekTutor"/>
                            <img src={GeekImg} alt="GeekTutor"/>
                            <img src={GeekImg} alt="GeekTutor"/>
                        </div>
                    </div>
                    <div class="bio-experience">
                        <div class="experience-container">
                            <div class="experience">
                                <div class="img">
                                    <img src={astericBullet} alt="Experience 1"/>
                                </div>
                                <p>Eight years of web development with PHP, two years of mobile development with Flutter</p>
                            </div>
                            <div class="experience">
                                <div class="img">
                                    <img src={astericBullet} alt="Experience 1" />
                                </div>
                                <p>Twenty years of wordpress, developed over 40 wordpress websites across e-commerce, business, professional and personal fields</p>
                            </div>
                            <div class="experience">
                                <div class="img">
                                    <img src={astericBullet} alt="Experience 1" />
                                </div>
                                <p>Product Manager @pethsdigitals, supervised and launched software products used by over 1,000,000 customers worldwide</p>
                            </div>
                            <div class="experience">
                                <div class="img">
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