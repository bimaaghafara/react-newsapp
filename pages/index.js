import React from 'react';

// components
import Layout from '../components/layout';


import {connect} from "react-redux";

class Home extends React.Component {
	static async getInitialProps({ req, store }) {
		store.dispatch({type: 'PAGE_TITLE', payload: 'Home'});
		return {};
	}

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		console.log('Home')
	}

	render() {
		return (
			// <div>Hello World! {this.props.activeMenu} {this.props.userAgent}</div>
			<Layout>
				Hello World.
			</Layout>
		);
	}
}

export default connect(state => state)(Home);