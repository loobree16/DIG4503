import React from "react";

class IdGetter extends React.Component {

    idGet(event) {
        event.preventDefault();

   
        let formId = document.querySelector("#pokeId");

        fetch("/id/" + formId.value)
        .then((res) => {
            return res.json();
        })

        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = "You're a " + processed.name;
            }
        });

    
    }

    render() {


        return(

            <div>

            <h2>ID</h2>
            <form onSubmit= {this.idGet}>
            <h1>Pokemon ID</h1>
            <input type="text" id="pokeId"/>
            <button>Submit</button>
            </form>

            </div>

        );
    };

}



 export default IdGetter;