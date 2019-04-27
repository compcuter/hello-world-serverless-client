import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Hello from './Hello';

import './App.css';

class App extends Component {
  renderNav() {
    return (
      <div className="nav">
        <Link to="/">Home Page</Link>
        <Link to="/hello/">Greeting Page</Link>
        <hr />
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {this.renderNav()}
            <Route path="/" exact component={Home} />
            <Route path="/hello/" component={Hello} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
