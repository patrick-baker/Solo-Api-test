import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Search from '../Search/Search'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1>Giphy Search!</h1>
          <Route exact path="/" component={Search}/>
        </Router>
      </div>
    );
  }
  
}

export default App;
