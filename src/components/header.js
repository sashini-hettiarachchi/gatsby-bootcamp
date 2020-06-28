import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyle.header}>
      <h1>
        {" "}
        <Link
          to="/"
          className={headerStyle.title}
          activeClassName={headerStyle.activeHeaderLink}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div>
        {" "}
        <ul className={headerStyle.navList}>
          <li>
            <Link
              to="/"
              className={headerStyle.headerLink}
              activeClassName={headerStyle.activeHeaderLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyle.headerLink}
              activeClassName={headerStyle.activeHeaderLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyle.headerLink}
              activeClassName={headerStyle.activeHeaderLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyle.headerLink}
              activeClassName={headerStyle.activeHeaderLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
