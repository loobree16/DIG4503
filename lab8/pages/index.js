import NameSearch from '../components/NameSearch';
import IdSearch from '../components/IdSearch';


const Home = () => {

   
      return (
         <div>
            <h2>Pokemon Search</h2>
            <NameSearch />
            <IdSearch />
            <h3>Results:</h3>
            <div id="results"></div>

        </div>
      );
    }
  
  
  
  export default Home;