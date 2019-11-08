import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Search from '../Search/Search';
import ShowResults from '../ShowResults/ShowResults'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1>Giphy Search!</h1>
          <Route exact path="/" component={Search}/>
          <ShowResults />
        </Router>
      </div>
    );
  }
  
}

export default App;
