import React, { Component } from 'react';


class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "YEET"
        };
    }
    // this method goes inside of the LightSwitch Component
    flipSwitch = () => {
        if (this.state.position === "YOINK") {
            this.setState({ position: "YEET" });
        } else {
            this.setState({ position: "YOINK" });
        }
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button onClick={ this.flipSwitch }>Have a Flip</button>
            </fieldset>
        );
    }
}

export default LightSwitch;
