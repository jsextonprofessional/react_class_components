import React, { Component } from "react";
import styles from './PersonCard.module.css'

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    
    render(){
        const birthday = () => {
            this.setState({age: this.state.age+1});
        }
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {this.props.hairColor}</h4>
                <button onClick={birthday} className={ styles.btn }>Birthday Button 4 {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonCard;