import React, { Component } from 'react';
import axios from 'axios';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: '' };
      }
    handleClick = () => {
        axios.get(`https://e9pa7v3btg.execute-api.us-west-2.amazonaws.com/dev/hello`)
            .then(res => {
                this.setState({ greeting: res.data });
            })
    }
    renderButton() {
        return (
            <button onClick={this.handleClick}>
                Click to fetch greeting
            </button>
        )
    }
    render() {
        return (
            <div>
                <h2>Greeting Page</h2>
                {this.renderButton()}
                <h3>The greeting is: {this.state.greeting}</h3>
            </div>
        );
    }
}

export default Hello;
