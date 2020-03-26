import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="text-info"><h1>Employee Directory</h1></div>
                <br></br>
                <h2>Search Employees by Name, Email or Phone Number</h2>
                <br></br>
                <h3> Click on "Name" to sort employee</h3>

            </div>
        )
    }
}