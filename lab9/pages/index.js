import Head from 'next/head';
import Link from 'next/link';


import styles from './styles.module.css';

const Home = () => {

   
      return (
        <div className={styles.body}>
        <div>
          <Head>
            <title>This is the Home Page</title>
          </Head>
        </div>
        
         <h1 className={styles.head}>Pokemon Search</h1>
         <h2 className={styles.head}>Home</h2>
         <p className={styles.head}>Search for pokemon by name, ID, or type!</p>
         <div className={styles.nav}>
         <Link href="/name">
           <a className={styles.a}>Name</a>
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
         

        </div>
      );
    }
  
  
  
  export default Home;