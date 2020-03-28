

class IdSearch extends React.Component {

  
    getId(event) {
      event.preventDefault();
    
      let input = document.getElementById("idInput").value;
  
    
      fetch("/api/pokemon/id/" + input)
      .then((res) => { 
        return res.json()
       })
      .then((result) => {
        
        let resultId = document.querySelector("#reportingId");
        let resultName = document.querySelector("#reportingName");
        let resultType = document.querySelector("#reportingType");
        if(result.error) {
          
          resultId.innerHTML = "There was an error, try again.";
        } else {
          
          resultName.innerHTML = "Name: " + result.name;
          resultId.innerHTML = "ID: " + result.id;
          resultType.innerHTML = "Type: " + result.typeList;
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