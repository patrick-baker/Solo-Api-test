import React, { Component } from 'react';
import {connect} from 'react-redux'


class ShowResults extends Component {

  favoriteImage = (url) => {
    // dispatch to POST saga here
  }

  render() {
    return (
      <div>
          {this.props.reduxState.APIReducer.map( (gif) => 
            <img src={gif.url}/>
            <button onClick={() => this.favoriteImage(gif.url)}>Favorite</button>}
          )}
      </div>
    );
  }
  
}

mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect()(ShowResults);