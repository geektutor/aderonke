import React from 'react'
import { connect, styled } from "frontity"

import HeaderContainer from "../styles/HeaderContainer"
import Navbar from '../NavBar/Navbar'

const Header = ({ state, actions }) => {
    let cross1 = state.theme.Navbar ? "cross1" : null;
    let cross2 = state.theme.Navbar ? "cross2" : null
    return(
        <>
        <HeaderContainer>
            <section className="header">
                <nav>
                    <div className="nav-container">
                        <div className="navBtn-container" onClick={actions.theme.toggleNav}>
                            <div className={`bar ${cross1}`}></div>
                            <div className={`bar ${cross2}`}></div>
                        </div>
                        <div className="download-resume-container">
                            <button className="download-btn">
                                Download Resume
                            </button>
                        </div>
                    </div>
                </nav>
                <Navbar />
                <div className="header-container">
                    <div className="header-contents">
                        <div className="right-side">
                            <h1>Sodiq Akinjobi</h1>
                            <p>{">_"} geektutor</p>
                        </div>
                        <div className="left-side">
                            <div className="roles">
                                <div className="roles-container">
                                    <h3 className="role1">wordpress babalawo</h3>
                                    <h3 className="role2">project manager</h3>
                                    <h3 className="role3">product manager</h3>
                                    <h3 className="role4">community advocate</h3>
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