import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch/index';
import styles from './styles.module.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "table": []
        };
    }

    setResults = (result) => {
        return(
            this.setState({"table": result})
        )
    }

    createResults() {
        return(
            <table className={styles.table}>
                <tbody>
                    {
                        this.state.table.map((entry, index) => {
                            return(
                                <tr key={index}>
                                    <td>{entry.id}</td>
                                    <td>{entry.name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }

    render() {
        return(
            <div className={styles.body}>
                <div>
                    <Head>
                        <title>Type</title>
                    </Head>
                    </div>
                    
                        <h1 className={styles.head}>Pokemon Search</h1>
                        <h2 className={styles.head}>Type</h2>
                            <div className={styles.nav}>
                            <Link href = "/index">
                                    <a className={styles.a}>Home</a>
                                </Link>
                                <br />
                                <Link href = "/name">
                                    <a className={styles.a}>Name</a>
                                </Link>
                                <br />
                                <Link href = "/id">
                                    <a className={styles.a}>ID</a>
                                </Link>
                              
                            </div>
                       
                    
                
                <br />
                <div>
                <p className={styles.head}>Search for Pokemon by type!</p>
                    <TypeSearch callback={this.setResults} />
                    {this.createResults()}
                </div>
            </div>
        );
    }
}
export default App;