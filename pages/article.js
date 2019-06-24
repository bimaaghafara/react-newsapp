import React from 'react';

// components
import Layout from '../components/layout'

import {connect} from "react-redux";

class Article extends React.Component {
	static async getInitialProps({ req, store }) {
		store.dispatch({type: 'PAGE_TITLE', payload: 'Article'});
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		return { userAgent };
	}

	constructor(props) {
		super(props);
		this.state = {
			activeMenu: 'home'
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