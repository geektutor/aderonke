import React from 'react'
import { connect } from "frontity"

import ShowcaseContainer from '../styles/ShowcaseContainer.style'
import showcaseImg from "../../Assets/img/showcase-img.jpg"

const Showcase = () => {
    return(
        <ShowcaseContainer>
        <section class="showcase">
            <div class="section-header">
                <div class="head-decoration"></div>
                <h2>Some of my works</h2>
            </div>
            <div class="showcase-container">
                <div class="showcase-content">
                    <div class="showcase-description">
                    <h3>Kuizu App</h3>
                    <p>Lorem Ipsom Idolor nes i don’t know what I’m flipping typing but I need placeholder text so I just have to keep going.</p> <br />
                    <p>This is somewhat like a second paragraph, you know; the extra stuff separated visually from the first paragraph to prevent cognitive overload</p>
                    </div>
                    <div class="showcase-image">
                        <img src={showcaseImg} alt="showcase" />
                    </div>
                </div>
                <div class="showcase-content reverse-flex">
                    <div class="showcase-description">
                    <h3>Open Hack Week 2019</h3>
                    <p>Lorem Ipsom Idolor nes i don’t know what I’m flipping typing but I need placeholder text so I just have to keep going.</p> <br />
                    <p>This is somewhat like a second paragraph, you know; the extra stuff separated visually from the first paragraph to prevent cognitive overload</p>
                    </div>
                    <div class="showcase-image">
                        <img src={showcaseImg} alt="showcase" />
                    </div>
                </div>
            </div>
        </section>
        </ShowcaseContainer>
    )
}

export default connect(Showcase)