class NameSearch extends React.Component {

   
    getName(event) {
        event.preventDefault();
      
      let input = document.querySelector("#nameInput");
  
      
      fetch("http://localhost:3000/api/pokemon/name/" + input.value)
      .then((res) => { return res.json(); } )
      .then((result) => {
        
        let resultId = document.querySelector("#reportingId");
        let resultName = document.querySelector("#reportingName");
        let resultType = document.querySelector("#reportingType");
  
       
        if(result.error) {
         
          resultName.innerHTML = "There was an error, try again. (Make sure it's capitalized!)";
        } else {
          resultName.innerHTML = result.name;
          resultId.innerHTML = result.id;
          resultType.innerHTML = result.typeList;
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