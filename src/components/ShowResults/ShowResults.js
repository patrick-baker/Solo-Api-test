import React, { Component } from 'react';
import { connect } from 'react-redux'


class ShowResults extends Component {

  favoriteImage = (url) => {
    // dispatch to POST saga here
    this.props.dispatch({type: 'FAVORITE_GIF', payload: {url: url}})
  }

  render() {
    return (
      <div>
        {this.props.fetchNewGifs.map((gif) =>
          <>
            <img src={gif.images.downsized_large.url} />
            <button onClick={() => this.favoriteImage(gif.images.downsized_large.url)}>Favorite</button>
          </>
        )}
        {/* <pre>{JSON.stringify(this.props.fetchNewGifs, null, 2)}</pre> */}
      </div>
    );
  }

}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(ShowResults);