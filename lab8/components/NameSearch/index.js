class NameSearch extends React.Component {

    // Instead of using an arror function as the value of
    //  the function, the arrow function is "in" the JSX value.
    //
    // This function is called inside of that arrow function.
    // 
    getName(event) {
        event.preventDefault();
      // Look for an element with the ID of nameInput
      let input = document.querySelector("#nameInput");
  
      // Use the same origin
      // 
      // Based on the name, fetch using the server's
      //  request parameter.
      fetch("http://localhost:3000/api/pokemon/name/" + input.value)
      .then((res) => { return res.json(); } )
      .then((result) => {
        
        // Look for an element with the ID of results
        let resultElement = document.querySelector("#results");
  
        // If the processed object has an 'error' property...
        if(result.error) {
          //... write that it could not be found.
          resultElement.innerHTML = "Could not find!";
        } else {
          //... otherwise, since no error, write its ID.
          resultElement.innerHTML = result.name + "! Their id is " + result.id;
        }
  
      });
    }

  
  
    render() {
      return (
        <form onSubmit={this.getName}>
          <input type="text" id="nameInput" placeholder="enter a name" />
          <button>SUBMIT</button>
        </form>
      );
    };
}

export default NameSearch;