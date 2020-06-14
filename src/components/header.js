import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Blog Site</h1>
      <div>
        {" "}
        <h3>
          <Link to="/">Home</Link>| <Link to="/about">About</Link> |
          <Link to="/blog">Blog</Link> |<Link to="/contact">Contact</Link>
        </h3>
      </div>
    </header>
  )
}

export default Header
