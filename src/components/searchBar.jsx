import React, { Component } from 'react';

class SearchBar extends Component {
    handleUpdate = (event) => {
        this.props.searchFunction(event.target.value);
    }
    render () {
        return (
            // here I return the input form for which I already have the CSS classes form-control and form-search from bootstrap
            <input type="text" className="form-control form-search" 
            onChange={this.handleUpdate} />
        )
    }
}

export default SearchBar;