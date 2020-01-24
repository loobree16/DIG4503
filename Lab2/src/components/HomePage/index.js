import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <p>{this.props.firstName}</p>
        );
    }
}

export default HomePage;

/*<Example FirstName="Briana" />
Elements + Attributes become Objects + Properties
<Example firstName="Briana" /> becomes 
class Example this.props
firstName becomes this.props.firstName
*/
