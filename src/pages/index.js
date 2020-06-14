import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1> Hello</h1>
      <h2>I'm sashini </h2>
      <p>
        Contact me <Link to="/contact">click</Link>
      </p>
    </div>
  )
}
export default IndexPage
