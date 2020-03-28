import Head from 'next/head';
import Link from 'next/link';

import NameSearch from '../components/NameSearch/index';

import styles from './styles.module.css';

class App extends React.Component {
    render(){
   
      return (
        <div>
        
          <Head>
            <title>Name</title>
          </Head>
        <div className={styles.body}>
         <h1 className={styles.head}>Pokemon Search</h1>
         <h2 className={styles.head}>Name</h2>
         <div className={styles.nav}>
         <Link href="/index">
           <a className={styles.a}>Home</a>
         </Link>
         <br />
         <Link href="/id">
           <a className={styles.a}>ID</a>
         </Link>
         <br />
         <Link href="/type">
           <a className={styles.a}>Type</a>
         </Link>
         </div>
         <br />
         <p className={styles.head}>Search for pokemon by Name!</p>
         <NameSearch />

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