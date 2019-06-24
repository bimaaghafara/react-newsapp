import Link from 'next/link'
import Head from 'next/head'

class Layout extends React.Component {
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
            <div>
                <Head>
                    <title>{this.props.title}</title>
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
                </header>

                {this.props.children}

                <footer>{'I`m here to stay as footer!'}</footer>
            </div>
		);
	}
}

export default Layout;