import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Image from "gatsby-image"


export default function Header() {
	const data = useStaticQuery(graphql`
		query LogoQuery {
		  logo: file(absolutePath: { regex: "/img/logo_400x400.png/" }) {
			childImageSharp {
			  fixed(width: 80, height: 80, traceSVG: {color: "#000000"}) {
				...GatsbyImageSharpFixed
			  }
			}
		  }
		  site {
			siteMetadata {
			  author {
				name
				summary
			  }
			  social {
				twitter
			  }
			}
		  }
		}
	  `)
	const linkStyle = {
		color: '#fefefe',
		minWidth: '80px',
		textAlign: 'center',
		alignSelf: 'center'
	};

	return (
		<header className='panel'>
			<div className='panel centered mobile hide' style={{ flexDirection: 'row' }}>
				<Link  activeClassName="active-link"  to='/' style={linkStyle}>Home</Link>
				<Link  activeClassName="active-link"  to='/games' style={linkStyle}>Games</Link>
				<Link to='/'>
					<Image
						fixed={data.logo.childImageSharp.fixed}
					/>
				</Link>
				<Link  activeClassName="active-link"  to='/coding' style={linkStyle}>Coding</Link>
				<Link  activeClassName="active-link"  to='/about' style={linkStyle}>About</Link>
			</div>

			<div className='panel centered mobile show'>
				<Link to='/'>
					<Image
						fixed={data.logo.childImageSharp.fixed}
					/>
				</Link>

				<div className='panel' style={{ flexDirection: 'row' }}>
					<Link activeClassName="active-link" to='/' style={linkStyle}>Home</Link>
					<Link activeClassName="active-link" to='/games' style={linkStyle}>Games</Link>
					<Link activeClassName="active-link" to='/coding' style={linkStyle}>Coding</Link>
					<Link activeClassName="active-link" to='/about' style={linkStyle}>About</Link>
				</div>
			</div>
		</header>
	);

};