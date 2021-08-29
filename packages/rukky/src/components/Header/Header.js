import React from 'react'
import { connect, styled } from "frontity"
import HeaderContainer from "../styles/HeaderContainer"

const Header = () => {
    return(
        <>
        <HeaderContainer>
            <section class="header">
                <nav>
                    <div class="nav-container">
                        <div class="navBtn-container">
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <div class="download-resume-container">
                            <button class="download-btn">
                                Download Resume
                            </button>
                        </div>
                    </div>
                </nav>
                <div class="header-container">
                    <div class="header-contents">
                        <div class="right-side">
                            <h1>Sodiq Akinjobi</h1>
                            <p>{">_"} geektutor</p>
                        </div>
                        <div class="left-side">
                            <div class="roles">
                                <div class="roles-container">
                                    <h3 class="role1">wordpress babalawo</h3>
                                    <h3 class="role2">project manager</h3>
                                    <h3 class="role3">product manager</h3>
                                    <h3 class="role4">community advocate</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HeaderContainer>
        </>
    )
}

export default connect(Header)

// const HeaderContainer = styled.div`

// `