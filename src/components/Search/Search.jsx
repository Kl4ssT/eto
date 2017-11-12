import React, { Component } from 'react';

class Search extends Component
{
    constructor(props)
    {
        super(props);

        this.searchChange = this.searchChange.bind(this);

        this.state = {
            searchQuery: ''
        };
    }

    searchChange(el)
    {
        this.setState({ searchQuery: el.target.value });
    }

    render()
    {
        return (
            <section className="search">
                <input type="text" onChange={this.searchChange} value={this.state.searchQuery} />
            </section>
        )
    }
}

export default Search;