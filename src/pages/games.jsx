import * as React from "react"
import { graphql, Link } from "gatsby"

import Brands from "../components/brands"
import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"

const GamesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="KR Game Studios" />

      <div className='page'>
        <h1>Games</h1>
        <div className="articleList">
          {posts.map(({ node }) => {
            return (
              <article className='col' style={{ alignItems: 'flex-start' }}
              >
                <Link to={node.fields.slug}><h1>{node.frontmatter.title || ""}</h1></Link>
                <div  dangerouslySetInnerHTML={{
                  __html: node.html,
                }}/>
              </article>
            )
          })}
        </div>
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\/games/"}}) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
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