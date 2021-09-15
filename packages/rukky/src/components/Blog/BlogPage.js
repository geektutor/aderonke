import React from 'react'
import { connect } from 'frontity'

import { Box, Flex, Text, Link } from "@chakra-ui/layout"

import BlogCards from './BlogCards'

const BlogPage = ({ state }) => {
    const data = state.source.get(state.router.link)
    // const homeArray = data.items.filter((item, key) => key <= 2);
    // console.log(homeArray);

    return(
        <Box p="1.5em">
            <Text color="#0C628D" fontSize="50px" p="20px" fontWeight="600" textAlign="center">Welcome to my Blog</Text>
            <Flex flexDir="column" ml={["0px","100px"]} alignItems={["center", "flex-start"]} gridGap="25px">
            {
                data.items.map((e) => {
                    const postItems = state.source.post[e.id]
                    return(
                        <BlogCards key={postItems.id} link={e.link} title={postItems.title.rendered} excerpt={postItems.excerpt.rendered} date={postItems.date}/>
                    )
                })
            }
            </Flex>
        </Box>
    )
}

export default connect(BlogPage);