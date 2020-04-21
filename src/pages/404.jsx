import * as React from "react"
import { graphql, Link} from "gatsby"

import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className='page'>
            <div className='panel centered' style={{alignItems:'center'}}>
                <h1>Not Found</h1>
                <Link to='/' style={{maxWidth: '710px', width: '100%'}}>
                    <Image
						fixed={data.notFoundImg.childImageSharp.fixed}
					/>
                </Link>
            </div>
		</div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    notFoundImg: file(absolutePath: { regex: "/img/404.png/" }) {
        childImageSharp {
          fixed(width: 710, height: 478) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
`