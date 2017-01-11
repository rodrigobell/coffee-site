import css from '../../styles/home.css';
import React from 'react';
import { Link, IndexLink } from 'react-router';


class HomePage extends React.Component {
	render() {
		return (
			<div id={css.root}>
			  	<div id={css.titleContainer}>
			    	<div id={css.title}>
			      	<h1>C<span className={css.smallCaps}>OFFEE</span>H<span className={css.smallCaps}>OUSE</span></h1>
			      	<h3>Your one-stop coffee resource.</h3>
			    	</div>
			  	</div>
			  	<nav>
			  		<Link to="/beans">BEANS</Link>
					<Link to="/brews">BREWS</Link>
					<Link to="/recipes">RECIPES</Link>
					<Link to="/latteart">LATTE ART</Link>
				</nav>
			</div>
		);
	}
}

export default HomePage;
