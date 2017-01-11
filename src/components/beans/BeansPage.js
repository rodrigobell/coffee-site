import React from 'react';
import Nav from '../common/Nav';

import '../../styles/beans.css';

class BeansPage extends React.Component {
	render() {
		return (
			<div id="beans">
				<Nav/>
				<h1>Beans</h1>
				<p>This page tells you all about coffee beans.</p>
			</div>
		);
	}
}

export default BeansPage;
