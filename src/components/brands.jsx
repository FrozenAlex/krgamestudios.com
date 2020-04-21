import React from 'react';

import { FaTwitter, FaGithub, FaFacebook, FaPatreon, FaDiscord } from "react-icons/fa"

class PanelBrands extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let img = {
			width: '32px'
		};

		return (
			<div className='panel' style={{flexDirection: 'row'}}>
				<a href="https://facebook.com/KRGameStudios">
					<FaFacebook/>
				</a>

				<a href="https://twitter.com/KRGameStudios">
					<FaTwitter  style={img} />
				</a>

				<a href="https://github.com/KRGameStudios">
					<FaGithub  style={img} />
				</a>

				<a href="https://discord.gg/FQmz8TN">
					<FaDiscord  style={img} />
				</a>

				<a href="https://www.patreon.com/krgamestudios">
					<FaPatreon  style={img} />
				</a>
			</div>
		);
	}
}

export default PanelBrands;