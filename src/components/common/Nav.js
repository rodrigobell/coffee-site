import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<IndexLink to="/">COFFEEHOUSE</IndexLink>
				<Link to="/beans">BEANS</Link>
				<Link to="/brews">BREWS</Link>
				<Link to="/recipes">RECIPES</Link>
				<Link to="/latteart">LATTE ART</Link>
			</nav>
		);
	}
}

export default Nav;
