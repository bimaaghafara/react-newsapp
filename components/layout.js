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
            <div className="container">
                <Head>
                    <title>{this.props.pageTitle}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                </Head>
                <header style={{margin: '20px 0'}}>
                    <nav>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </nav>
                </header>

                {this.props.children}

                {/* <footer>footer!</footer> */}
            </div>
		);
	}
}

export default connect(state => state)(Layout);