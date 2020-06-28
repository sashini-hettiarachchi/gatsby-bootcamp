import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

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
          {
            console.log(element.node)
          }

          return (
            <li>
              <h2>Title : {element.node.frontmatter.title}</h2>
              <p>Date : {element.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
