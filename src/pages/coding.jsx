import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"

const GamesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Coding" />

      <div className='page'>
       
        <h1>Coding</h1>
        {posts.map(({ node }) => {
          return (
            <article className='panel' >
                <hr />
                <Link  className="title"  to={node.fields.slug}><h2>{node.frontmatter.title || ""}</h2></Link>
                <div dangerouslySetInnerHTML={{
                  __html: node.html,
                }} />
              </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default GamesPage

export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
          title
        }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\/coding/"}}) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
            slug
          }
          fields {
            slug
          }
        }
      }
    }
  }
  
`