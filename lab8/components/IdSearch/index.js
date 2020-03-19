

class IdSearch extends React.Component {

    // Instead of using an arror function as the value of
    //  the function, the arrow function is "in" the JSX value.
    //
    // This function is called inside of that arrow function.
    // 
    getId(event) {
      event.preventDefault();
      // Look for an element with the ID of nameInput
      let input = document.getElementById("idInput").value;
  
    
      fetch("/api/pokemon/id/" + input)
      .then((res) => { 
        return res.json()
       })
      .then((result) => {
        
        // Look for an element with the ID of results
        let resultId = document.getElementById("results");
        //this.props.getId(result);
        // If the processed object has an 'error' property...
        if(result.error) {
          //... write that it could not be found.
          resultId.innerHTML = "Could not find!";
        } else {
          //... otherwise, since no error, write its ID.
          resultId.innerHTML = "ID #" + result.id + " is a " + result.name;
        }
  
      });
    }

  
  
    render() {
      return (
         <form>
          <input type="text" id="idInput" placeholder="enter an ID" />
          <button onClick={this.getId}>SUBMIT</button>
        </form>
        
      );
    }
}

export default IdSearch;