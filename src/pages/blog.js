import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Bolgs</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(element => {
          return (
            <li>
              <Link to={`/blog/${element.node.fields.slug}`}>
                <h2>{element.node.frontmatter.title}</h2>
              </Link>
              <p>{element.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
