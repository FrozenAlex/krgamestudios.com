import React from 'react';
import { Link } from 'gatsby';

class Footer extends React.Component {
	render() {
		const year = new Date().getFullYear();

		return (
			<footer className='page-footer centered'>
				<p>Copyright &copy; <Link to='/'>KR Game Studios</Link> 2015-{year}</p>
			</footer>
		);
	}
};

export default Footer;