import React from 'react';

// components
import Layout from '../components/layout'

import {connect} from "react-redux";

class Article extends React.Component {
	static async getInitialProps({ req, store }) {
		store.dispatch({type: 'PAGE_TITLE', payload: 'Article'});
		return {};
	}

	constructor(props) {
		super(props);
		this.state = {
		};
    }
    
	render() {
		return (
            <Layout>
				Article
			</Layout>
		);
	}
}

export default connect(state => state)(Article);