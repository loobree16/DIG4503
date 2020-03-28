import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/idSearch/index';
import styles from './styles.module.css';


class App extends React.Component {
    render() {
    return (
        <div>
            <Head>
                <title>ID</title>
            </Head>
            <div className={styles.body}>
                <h1 className={styles.head}>Pokemon Search</h1>
                <h2 className={styles.head}>ID</h2>
                <div className={styles.nav}>
                <Link href="/index">
                    <a className={styles.a}>Home</a>
                </Link>
                <br />

                <Link href="/type">
                   <a className={styles.a}>Type</a>
                </Link>
                <br />
                <Link href="/name">
                   <a className={styles.a}>Name</a>
                </Link>
                </div>
                <br />
                <p className={styles.head}>Search by ID</p>
                <IdSearch />

                <h2 className={styles.head}>Results:</h2>
                <div className={styles.results} id="reportingName"></div>
                <div className={styles.results} id="reportingId"></div>
                <div className={styles.results} id="reportingType"></div>
            </div>
        </div>
    );
}
}


export default App;