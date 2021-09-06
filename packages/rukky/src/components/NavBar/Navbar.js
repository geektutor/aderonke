import React from 'react'
import { connect } from 'frontity'
import Link from "@frontity/components/link"
// import { HashLink as Link } from 'react-router-hash-link';

import NavbarContainer from '../styles/NavbarContainer.style'


const Navbar = ({ state, actions }) =>{
    let showNav = state.theme.Navbar ? null : "none"
    return(
        <NavbarContainer>
            <aside className="mobile-nav" id={showNav}>
                <div className="nav-links-container">
                    <div className="nav-links">
                        <ul>
                            <li><Link link="#">Bio</Link></li>
                            <li><Link link="#" onClick={actions.theme.showCaseScroll}>My Works</Link></li>
                            <li><Link link="#">Blog</Link></li>
                            <li><Link link="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </aside>
        </NavbarContainer>
    )
}

export default connect(Navbar);