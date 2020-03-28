

class TypeSearch extends React.Component {

   
    getType = () => {
        
      
      let input = document.querySelector("#typeInput");
  
    
      fetch("/api/pokemon/type/" + input.value)
      .then((res) => { return res.json(); } )
      .then((result) => {
        
        this.props.callback(result);
        /*let resultId = document.querySelector("reportingId");
        let resultName = document.querySelector("reportingName");
        let resultType = document.querySelector("reportingType");*/
  
        
        /*if(result.error) {
    
          resultName.innerHTML = "Could not find!";
        } else {
     
          resultName.innerHTML = result.name;
          resultId.innerHTML = result.id;
          resultType.innerHTML = result.typeList;
        }*/
  
      });
    }

  
  
    render() {
      return (
        <div>
        
          <input type="text" id="typeInput" placeholder="enter a type" />
          <button onClick={this.getType}>SUBMIT</button>
        
        </div>
      );
    };
}

export default TypeSearch;