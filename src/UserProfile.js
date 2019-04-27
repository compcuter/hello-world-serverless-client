import React, { Component } from 'react';


class UserProfile extends Component {
    renderUserProfile(){
        return (
            <div>
                <h4>User Profile</h4>
                <img width={"120"} src={this.props.user.avatar_url} />
                <h3>{this.props.user.login}</h3>
                <h4>Created at: {this.props.user.created_at}</h4>
                <h4>Github profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></h4>
            </div>
        )
    }
    render() {
        const profile = this.props.user.login !== undefined ? this.renderUserProfile() : <div></div>;
        return (
            profile
        );
    }
}

export default UserProfile;
