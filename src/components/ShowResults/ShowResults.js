import React, { Component } from 'react';
import {connect} from 'react-redux'


class ShowResults extends Component {

  render() {
    return (
      <div>
          {this.props.reduxState.APIReducer.map(gif => <img src={gif.url}/>)}
      </div>
    );
  }
  
}

mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect()(ShowResults);