import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About this site</h1>
      <p>This is the for bologging</p>
      <p>
        do you want to contact us? <Link to="/contact">click</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
