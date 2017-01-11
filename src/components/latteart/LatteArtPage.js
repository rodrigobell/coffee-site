import '../../styles/latteArt.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as latteArtActions from '../../actions/latteArtActions';

class LatteArtPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			latteArt: {title: ""}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const latteArt = this.state.latteArt;
		latteArt.title = event.target.value;
		this.setState({latteArt: latteArt});
	}

	onClickSave() {
		this.props.actions.createLatteArt(this.state.latteArt);
	}

	latteArtRow(latteArt, index) {
		return <div key={index}>{latteArt.title}</div>;
	}

	render() {
		return (
			<div id="latteArt">
				<h1>Hall of Latte Art</h1>
				{this.props.latteArts.map(this.latteArtRow )}
				<h2>Add Latte Art</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.latteArt.title} />

				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
			</div>
		);
	}
}

LatteArtPage.propTypes = {
	latteArts: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		latteArts: state.latteArts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(latteArtActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LatteArtPage);
  