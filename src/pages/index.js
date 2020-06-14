import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1> Hello</h1>
      <h2>I'm sashini </h2>
      <p>
        Contact me <Link to="/contact">click</Link>
      </p>
      <Footer />
    </div>
  )
}
export default IndexPage
