import React, { Component } from "react";

class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h4>Age: {this.props.age}</h4>
                <h4>Hair Color: {this.props.hairColor}</h4>
            </div>
        )
    }
}

export default PersonCard;