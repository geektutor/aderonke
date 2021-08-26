import React from "react"
import { connect, Global, css } from "frontity"
import Link from "@frontity/components/link"

import Header from "./Header/Header"

const Root = ({ state }) => {
  return (
    <>
    <Global 
      styles={css`
        body{
          margin: 0px;
          padding: body
          box-sizing: border-box;
        }
      `
      }
    />
      <Header />

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

