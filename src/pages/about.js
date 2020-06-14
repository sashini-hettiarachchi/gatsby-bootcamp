import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About this site</h1>
      <p>This is the for bologging</p>
      <p>
        do you want to contact us? <Link to="/contact">click</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
