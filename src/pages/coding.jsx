import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"

const GamesPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="KR Game Studios" />

            <div className='page'>
                <h1>Coding</h1>
                {posts.map(({ node }) => {
                            return (
                                <article className='col' style={{ alignItems: 'flex-start' }}
                                    dangerouslySetInnerHTML={{
                                        __html: node.html,
                                    }}
                                />
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