import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShowResults from '../ShowResults/ShowResults'

class Search extends Component {
    
    state = {
        keyword: '',
    }

    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }

    handleClick = () =>
    this.props.dispatch({type: 'FETCH_GIFS', payload: this.state.keyword});

    render() {
        return (
            <div>
            <h2>Search</h2>
            <input type="text" placeholder="keyword" onChange={this.handleChange} />
            <button onClick={this.handleClick}>SEARCH</button>
            <ShowResults />
        </div>
        )
    }
}



export default connect()(Search);