import NameSearch from '../components/NameSearch';
import IdSearch from '../components/IdSearch';

const Home = () => {

   
      return (
         <div>
        <NameSearch />
        <IdSearch />
        <h2>Reporting</h2>
        <div id="results"></div>

        </div>
      );
    }
  
  
  
  export default Home;