import Link from 'next/link';
import Head from 'next/head';
import {connect} from "react-redux";

class Layout extends React.Component {
	static async getInitialProps({ req }) {
		return {};
	}

	constructor(props) {
		super(props);
		this.state = {
		};
    }
    
	render() {
		return (
            <div>
                <Head>
                    <title>{this.props.pageTitle}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <header>
                    <nav>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>{' '}
                        |
                        <Link href='/article'>
                            <a>Article</a>
                        </Link>{' '}
                    </nav>
                    <div><h3>{this.props.pageTitle}</h3></div>
                </header>

                {this.props.children}

                <footer>{'I`m here to stay as footer!'}</footer>
            </div>
		);
	}
}

export default connect(state => state)(Layout);