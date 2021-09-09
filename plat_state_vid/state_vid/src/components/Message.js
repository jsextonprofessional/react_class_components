import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "YEET"
        }
    }

    logout = (e) => {
        this.setState({message: "YOINK"});
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ this.logout }>care for a state change?</button>
            </div>
        );
    }
}

export default Message;