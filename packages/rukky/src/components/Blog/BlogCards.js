import React from 'react'
import { connect } from "frontity"
import Link from '@frontity/components/link'


import { Box, Text } from '@chakra-ui/layout'

const BlogCards = ({title, excerpt, link}) => {
    console.log(link);
    return(
        <Box borderLeft="2px solid #0C628D" p="10px" width={["90%", "60vw"]}>
            <Link style={{color: "#1D77A4"}} link={link}>{title} &#8663;</Link>
            <Box dangerouslySetInnerHTML={{__html: excerpt}}></Box>
        </Box>
    )
}

export default connect(BlogCards);