import React from 'react';

// components
import Layout from '../components/layout'

class Home extends React.Component {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		return { userAgent };
	}

	constructor(props) {
		super(props);
		this.state = {
			activeMenu: 'home'
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

export default Home;