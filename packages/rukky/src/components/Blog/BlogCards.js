import React from 'react'
import { connect } from "frontity"
import Link from '@frontity/components/link'
import dayjs from 'dayjs'

import { Box, Text } from '@chakra-ui/layout'

const BlogCards = ({title, excerpt, link, date}) => {
    let formattedDate = dayjs(date).format('MMM DD, YYYY');
    console.log(link, formattedDate);
    return(
        <Box borderLeft="2px solid #0C628D" p="10px" width={["90%", "60vw"]}>
            <Link style={{color: "#1D77A4"}} link={link}>{title} &#8663;</Link>
            <Text color="grey" fontSize="11px">Posted: {formattedDate}</Text>
            <Box dangerouslySetInnerHTML={{__html: excerpt}}></Box>
        </Box>
    )
}

export default connect(BlogCards);