import React from 'react';

// components
import Layout from '../components/layout'

import {connect} from "react-redux";

class Article extends React.Component {
	static async getInitialProps({ req, store, query, articles, props }) {
		store.dispatch({type: 'PAGE_TITLE', payload: 'Article'});
		console.log(store.getState());
        if (!store.getState().articles) {
            const res = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=767f8235faec4200a8d3c90ab9f6253b');
            const data = await res.json();
            store.dispatch({type: 'ARTICLES', payload: data.articles});
		}
		return {query};
	}

	constructor(props) {
		super(props);
		this.state = {
		};
    }
    
	render() {
		const article = this.props.articles.find(article => article.title === this.props.query.title);
		return (
            <Layout>
				<div style={{background: `url('${article.urlToImage}')`, backgroundSize: 'cover', minHeight: '400px', width:'100%', backgroundColor: 'darkgrey'}}>
					<div style={{padding: '20px', opacity:'0.8', backgroundColor: 'white'}}>
						<h3>{article.title}</h3>
						<h5 className="text-right">{article.author}, {article.publishedAt.split('T')[0]}</h5>
					</div>
				</div>
				<p style={{padding: '20px 0'}}>{article.content}</p>
				<p>Click original source to read full content: <a href={article.url} target="_blank">Click original source to read full content: {article.url}</a></p>
			</Layout>
		);
	}
}

export default connect(state => state)(Article);