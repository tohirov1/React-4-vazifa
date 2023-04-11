import React, { Component } from "react";
import "./Main.css"
export default class Main extends Component {
    render() {
        return(
            <>
            <h1>{this.props.name}</h1>
            <h1>{this.props.lastname}</h1>
            </>
        )
    }
}