import React, { Component } from 'react';
import { connect } from 'react-redux'


class Favorites extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FAVORITES' });
    }

    render() {
        return (
            <div>
                {this.props.fetchFavoriteGifs.map( (gif) => 
                    <img src={gif.url} />
                )}
                <pre>{JSON.stringify(this.props.fetchFavoriteGifs, null, 2)}</pre>
            </div>
        );
    }

}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Favorites);