import React from 'react'
import { connect } from 'frontity'

import FooterContainer from '../styles/FooterContainer.style'

const Footer = () => {
    return(
        <FooterContainer>
            <footer>
                &copy; 2021 GeekTutor
            </footer>
        </FooterContainer>
    )
}

export default connect(Footer)