import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About this site</h1>
      <p>This is the for bologging</p>
      <p>
        do you want to contact us? <Link to="/contact">click</Link>
      </p>
    </div>
  )
}

export default AboutPage
