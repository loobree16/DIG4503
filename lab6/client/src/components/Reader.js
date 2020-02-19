import React from "react";
class Reader extends React.Component {


      nameGet(event) {
        event.preventDefault();
       
        let formName = document.querySelector("#pokeName");
        
        fetch("/name/" + formName.value.toLowerCase()).then((res) => {
            return res.json();

        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = "Your name is " + processed.name;
            }
        });

       
    }

    render() {

        
        return(

            <div>

            <h2>Name</h2>
            <form>
            <h1>Pokemon Name</h1>
            <input type="text" id="pokeName"/>
            <button onClick={this.nameGet}>Submit</button>
        </form>

            </div>

        );
    };

}

 export default Reader