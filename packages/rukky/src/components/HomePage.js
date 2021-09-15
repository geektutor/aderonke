import React from 'react'
import { connect } from 'frontity'

import Header from "./Header/Header"
import Bio from "./Bio/Bio"
import Showcase from "./Showcase/Showcase"
import HomeBlog from "./Blog/HomeBlog"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

const HomePage = () =>{
    return(
        <>
            <Header />
            <Bio />
            <Showcase />
            <HomeBlog />
            <Contact />
            <Footer />
        </>
    )
}

export default connect(HomePage)