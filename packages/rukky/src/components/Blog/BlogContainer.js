import React from 'react'
import { connect } from 'frontity'
import Switch from '@frontity/components/switch'
import Link from '@frontity/components/link'


import { Box, Flex, Text } from "@chakra-ui/layout"
import { Button, ButtonGroup } from "@chakra-ui/react"
import BlogPage from './BlogPage'
import DisplayBlogPage from './DisplayBlogPage'


const BlogContainer = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const pageType = state.source.data
    return(
        <Box>
            <Box p="20px" backgroundColor="#0C618D">
                <Flex justifyContent="space-between" alignItems="center">
                <Box>
                    <Text fontSize="28px" color="White">
                        GeekTutor's Blog
                    </Text>
                </Box>
                    <Box>
                        { state.router.link == "/" ?
                            <Button  onClick={ actions.theme.toggleBlog}>
                            Back
                        </Button> : 
                        <Link link="/" 
                        style={{
                        backgroundColor: "white",
                        padding: 16 + "px",
                        paddingTop: 8 + "px",
                        paddingBottom: 8 + "px",
                        borderRadius: 0.375 + "rem",
                        height: 40 + "px"
                        }}>
                            Back
                        </Link>}

                    </Box>
                </Flex>
            </Box>
            {/* <Main> */}
            <Switch>
                <BlogPage when={data.isArchive} />
                <DisplayBlogPage when={data.isPost} />
            </Switch>
            {/* </Main> */}
        </Box>
    )
}

export default connect(BlogContainer)