import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1>Giphy Search!</h1>
          <Route exact path="/" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </Router>
      </div>
    );
  }

}

export default App;
