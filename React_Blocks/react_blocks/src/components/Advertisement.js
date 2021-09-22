import React, { Component } from "react";

class Advertisement extends Component{    
    render(){
        return(
            <div className={ styles.yeet }>
                <h1>{ props.children }</h1>
            </div>
        )
    }
}

export default Advertisement;