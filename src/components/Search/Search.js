import React, { Component } from 'react';
import {connect} from 'react-redux';
//SearchList

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
    this.props.dispatch({type: '', payload: this.state.keyword});

    render() {
        return (
            <div>
            <h2>Search</h2>
            <input type="text" placeholder="keyword" onChange={this.handleChange} />
            <button onClick={this.handleClick}>SEARCH</button>
            {/* <SearchList /> */}
        </div>
        )
    }
}



export default connect()(Search);