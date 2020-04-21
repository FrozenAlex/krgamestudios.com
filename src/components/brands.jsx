import React from 'react';

import { FaTwitter, FaGithub, FaFacebookF, FaPatreon, FaDiscord } from "react-icons/fa"

class PanelBrands extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let img = {
			width: '32px'
		};

		return (
			<div className='brands-bar' style={{flexDirection: 'row'}}>
				<a className="facebook" href="https://facebook.com/KRGameStudios">
					<FaFacebookF size={32}/>
				</a>

				<a className="twitter" href="https://twitter.com/KRGameStudios">
					<FaTwitter  size={32} style={img} />
				</a>

				<a className="github" href="https://github.com/KRGameStudios">
					<FaGithub  size={32} style={img} />
				</a>

				<a className="discord" href="https://discord.gg/FQmz8TN">
					<FaDiscord  size={32} style={img} />
				</a>

				<a className="patreon" href="https://www.patreon.com/krgamestudios">
					<FaPatreon size={32} style={img} />
				</a>
			</div>
		);
	}
}

export default PanelBrands;