import React, { Component } from 'react';
import axios from 'axios';

import UserProfile from './UserProfile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            username: 'octocat',
        };
    }
    handleClick = (event) => {
        axios.get(`https://e9pa7v3btg.execute-api.us-west-2.amazonaws.com/dev/user?name=${this.state.username}`)
            .then(res => {
                this.setState({ user: res.data.message });
            })
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({username: event.target.value});
    }
    renderForm() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label>
                        <h3>Enter Github Username:</h3>
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Get Github User" />
                </form>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                {this.renderForm()}
                <br />
                <UserProfile user={this.state.user}/>
            </div>
        );
    }
}

export default Home;
