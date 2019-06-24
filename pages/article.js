import React from 'react';

// components
import Layout from '../components/layout'

class Article extends React.Component {
	static async getInitialProps({ req }) {
		console.log('Article')
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

export default Article;