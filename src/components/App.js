// This component handles the App template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div id="route-container">
				{children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
