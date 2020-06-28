import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <h6>Created by {data.site.siteMetadata.author}</h6>
    </footer>
  )
}

export default Footer
