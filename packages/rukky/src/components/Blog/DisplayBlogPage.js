import React from 'react'
import { connect } from 'frontity'
import { Box, Text, Flex } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import dayjs from 'dayjs'

const DisplayBlogPage = ({ state }) => {
    const pageData = state.source.get(state.router.link)
    const post = state.source.post[pageData.id]
    const author = state.source.author[1]
    const date = state.source.post[pageData.id].date
    let formattedDate = dayjs(date).format('MMM DD, YYYY');
    const content = state.source.post[pageData.id].content.rendered
    // console.log(pageData.id, author.name);
    return(
        <Box p="15px">
            <h2>
                <Text fontSize="25px" fontWeight="600">
                    {post.title.rendered}
                </Text>
            </h2>
            <Flex alignItems="center" gridGap="15px" p="10px">
                <Avatar name={author.name} src={author.avatar_urls[96]}/>
                <Text color="grey" fontWeight="400">{author.name} - {formattedDate}</Text>
            </Flex>
            <Box p="1em" dangerouslySetInnerHTML={{__html: content}}></Box>
        </Box>
    )
}

export default connect(DisplayBlogPage)