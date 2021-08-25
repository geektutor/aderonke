import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Root = ({ state}) => {
  return (
    <>
      <h1>Hello Geektutor</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
          <Link link="#bio">Bio</Link>
          <Link link="#showcase">Showcase</Link>
          <Link link="#blog">Blog</Link>
          <Link link="#contact">Contact</Link>
      </nav>
    </>
  )
}

export default connect(Root)