import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import * as searchActions from '../../actions/search.js';

import './Search.scss';

class Search extends Component
{
    constructor(props)
    {
        super(props);

        this.searchChange = this.searchChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchChange(el)
    {
        this.props.setQuery(el.target.value);
    }

    searchHandler()
    {
        this.props.getUsers(this.props.search.page);
    }

    render()
    {
        const { query } = this.props.search;

        return (
            <section className={classnames('search', this.props.className)}>
                <input type="text" className="search__input" onChange={this.searchChange} value={query} placeholder="Поиск..." />
                <button className="search__btn" onClick={this.searchHandler}>Найти</button>
            </section>
        )
    }
}

export const mapStateToProps = state => {
    return {
        search: state.search
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default Search;