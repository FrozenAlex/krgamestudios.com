import * as React from "react"
import { graphql, Link } from "gatsby"

import Brands from "../components/brands"
import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"

const SiteIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Home" />
            <div className='page'>
                <Brands />
                <h1>Welcome!</h1>
                <hr />
                <div className='table articleList'>
                    <div className='row'>
                        {posts.map(({ node }) => {
                            return (
                                <article className='col' style={{display:"block"}}>
                                    <h2>{node.frontmatter.title}</h2>
                                    <div dangerouslySetInnerHTML={{
                                        __html: node.html,
                                    }}>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    

    allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}) {
        edges {
            node {
                id
                excerpt(pruneLength: 160)
                html
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  description
                }
            }
        }
    }
  }
`



// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    //   edges {
    //     node {
    //       excerpt
    //       fields {
    //         slug
    //       }
    //       frontmatter {
    //         date(formatString: "MMMM DD, YYYY")
    //         title
    //         description
    //       }
    //     }
    //   }
    // }