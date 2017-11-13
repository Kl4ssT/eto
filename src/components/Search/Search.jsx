import React, { Component } from 'react';

class Search extends Component
{
    constructor(props)
    {
        super(props);

        this.searchChange = this.searchChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);

        this.state = {
            searchQuery: ''
        };
    }

    searchChange(el)
    {
        this.setState({ searchQuery: el.target.value });
    }

    searchHandler()
    {
        this.props.getUsers(this.state.searchQuery);
    }

    render()
    {
        return (
            <section className="search">
                <input type="text" className="search__input" onChange={this.searchChange} value={this.state.searchQuery} />
                <button onClick={this.searchHandler}>Найти</button>
            </section>
        )
    }
}

export default Search;