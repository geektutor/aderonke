import React from "react"
import { connect, Global, css } from "frontity"
import Link from "@frontity/components/link"
import Switch from '@frontity/components/switch'

// CSS Library
import { ChakraProvider } from "@chakra-ui/react"

import Header from "./Header/Header"
import Bio from "./Bio/Bio"
import Showcase from "./Showcase/Showcase"
import HomeBlog from "./Blog/HomeBlog"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import BlogPage from "./Blog/BlogPage"
import BlogContainer from "./Blog/BlogContainer"
import HomePage from "./HomePage"
import DisplayBlogPage from "./Blog/DisplayBlogPage"


const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
    <Global 
      styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
        :root {
          --role-font-size: 22.5px;
          --role-font-size-grow: 25.5px;
        }
        body{
          margin: 0px;
          padding: body
          box-sizing: border-box;
        }
        @media (min-width: 1000px){
          :root {
          --role-font-size: 30.5px;
          --role-font-size-grow: 35.5px;
        }
        }
      `
      }
    />

    {state.theme.showBlog ? 
      (<ChakraProvider>
        <BlogContainer />
        <Footer />
      </ChakraProvider>) : (
      <>
        <Switch>
          <HomePage when={data.isHome} />
          <ChakraProvider>
            <BlogContainer when={data.isPost}/>
          </ChakraProvider>
        </Switch>
      </>
      ) }
      

      

      {/* <h1>Hello Geektutor</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
          <Link link="#bio">Bio</Link>
          <Link link="#showcase">Showcase</Link>
          <Link link="#blog">Blog</Link>
          <Link link="#contact">Contact</Link>
      </nav> */}
    </>
  )
}

export default connect(Root)

