import React from 'react';

// components
import Layout from '../components/layout';

// 3rd lib
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {connect} from "react-redux";

class Home extends React.Component {
	static async getInitialProps({ req, store }) {
		store.dispatch({type: 'PAGE_TITLE', payload: 'Home'});
		const res = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=767f8235faec4200a8d3c90ab9f6253b');
		const data = await res.json();
		store.dispatch({type: 'ARTICLES', payload: data.articles});
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
				<h3>
					Top Trending Indonesia
				</h3>
				{this.props.articles.map(article =>
					<Link href={`/article?title=${article.title}`}>
					<div className="col-sm-6 col-md-4 col-lg-3" style={{padding: '10px', cursor: 'pointer'}}>
						<div className="well" style={{minHeight: '350px'}}>
							<div style={{backgroundImage: `url('${article.urlToImage}')`, backgroundSize: 'cover', height: '150px', width:'100%', backgroundColor: 'darkgrey'}}></div>
							<div className="well-sm">{article.title}</div>
							<p style={{paddingLeft: '9px'}}><small>Published at: {article.publishedAt.split('T')[0]}</small></p>
							<div className="text-center well-sm"><a>Click to read more ...</a></div>
						</div>
					</div>
					</Link>
				)}
			</Layout>
		);
	}
}

export default connect(state => state)(Home);