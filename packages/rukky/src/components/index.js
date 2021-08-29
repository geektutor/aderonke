import React from "react"
import { connect, Global, css } from "frontity"
import Link from "@frontity/components/link"

import Header from "./Header/Header"
import Bio from "./Bio/Bio"
import Showcase from "./Showcase/Showcase"


const Root = ({ state }) => {
  return (
    <>
    <Global 
      styles={css`
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
      <Header />
      <Bio />
      <Showcase />

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

